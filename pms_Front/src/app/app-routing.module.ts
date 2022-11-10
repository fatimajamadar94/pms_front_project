import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { HomeComponent } from './home/home.component';
import { HrverificationComponent } from './hrverification/hrverification.component';

const routes: Routes = [  
  { path: '', component: EmpLoginComponent },  
  { path: 'emp-register', component: EmpRegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'emplist', component: HrverificationComponent }

];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
