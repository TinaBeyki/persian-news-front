import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AuthenticationService} from '../_service/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    //get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //getter for easy access to form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
//.pipe(first())
    this.loading = true;
    this.authenticationService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
      this.router.navigate(['/home']);
      //this.loading = false;
    /* .subscribe(data => {
       this.router.navigate(['/home']);
     },
       error => {
         this.alertService.error(error);
         this.loading = false;
       })*/

  }

}
