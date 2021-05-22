import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule {}
