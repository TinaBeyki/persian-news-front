/*
Error Interceptor intercepts http responses from the api to check if there is any error
 */
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../_service/authentication.service';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      if(error.status === 401) {

        //if 401 occuers it will logout
        this.authenticationService.logout();
        location.reload(true);
      }
      const err = error.error.message || error.statusText;
      return throwError(err);

    }))
  }

}
