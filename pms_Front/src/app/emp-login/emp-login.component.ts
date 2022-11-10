import { Component, OnInit } from '@angular/core';
import { EmpMaster } from '../model/emp-master';
import { UserService } from '../service/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

   fvalue:any;
  login :any;
  msg:any;
  incorrect :any;
  private empmaster: EmpMaster=new EmpMaster();
  //errorMessage:string;
  constructor(private userService :UserService,private router:Router) { }



  ngOnInit() {


  }

  onSubmit(fvalue: { value: { username: any; password: any; }; }){
    console.log(fvalue.value)
    let username=fvalue.value.username;
    let password=fvalue.value.password;
    console.log("username>>"+username)
    console.log("password>>"+password)
    this.userService.login(username,password).subscribe(response=>{
      this.login=<any>response;
      console.log(response)
if (this.login.msg == "Login Successfully!"){
      console.log(this.login.msg);
    console.log("in condition")
    // sessionStorage.setItem("data",username);
     this.router.navigate(['/home']);
 }
     else{
       this.incorrect="invalid User"
    this.router.navigate(['/']);

 }
})
  }


}
