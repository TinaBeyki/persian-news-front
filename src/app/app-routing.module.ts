import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './_helper/auth.guard';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TeamComponent} from './team/team.component';
import {ExploreComponent} from './explore/explore.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'explore', component: ExploreComponent},
   {path: '**', redirectTo: 'login'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
