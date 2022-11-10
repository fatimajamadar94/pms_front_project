import { Component, OnInit } from '@angular/core';
import { EmpMaster } from '../model/emp-master';
import { UserService } from '../service/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent implements OnInit {
   empmaster: EmpMaster=new EmpMaster() ;
 submitted :any ;
  constructor(private userservice :UserService,private router:Router) { }

  ngOnInit(): void {
  }
  // newEmployee(): void {
  //    this.submitted = false;
  //   this.empmaster = new EmpMaster();
  // }

  save() {
    this.userservice
    .createEmployee(this.empmaster).subscribe(data => {
      console.log(data)
      //.gotoList();

    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();  
    this.router.navigate(['/']);
  
  }
  }
