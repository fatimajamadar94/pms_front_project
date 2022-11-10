import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HrverificationComponent } from './hrverification/hrverification.component';
import { HeaderComponent } from './header/header.component';
import { AddprojectComponent } from './addproject/addproject.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpRegisterComponent,
    EmpLoginComponent,
    HomeComponent,
    HrverificationComponent,
    HeaderComponent,
    AddprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
