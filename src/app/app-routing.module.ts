import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'posts', component: DashboardComponent },
  { path: 'services', component: DashboardComponent },
  { path: 'about', component: DashboardComponent },
  { path: 'contact', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
