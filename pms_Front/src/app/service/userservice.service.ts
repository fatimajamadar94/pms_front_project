import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
private url='http://localhost:8080/registration';
private loginurl=" http://localhost:8080/logincheck";
private RegisterListUrl=" http://localhost:8080/getEmployee";



  constructor(private http:HttpClient) { }
  createEmployee(employee: Object): Observable <Object> {
    return this.http.post(`${this.url}`, employee);
  }
  login(username:any,password:any){
    return ( this.http.get(this.loginurl+"/"+username+"/"+password));
  }
  getAllRegisterEmp():Observable <any>{
    return(this.http.get(`${this.RegisterListUrl}`));
  }
}
