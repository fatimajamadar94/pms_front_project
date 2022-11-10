import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpMaster } from '../model/emp-master';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-hrverification',
  templateUrl: './hrverification.component.html',
  styleUrls: ['./hrverification.component.css']
})
export class HrverificationComponent implements OnInit {
  emp: EmpMaster[]=[];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {

  }
  reloadData() {

     this.userservice.getAllRegisterEmp().subscribe((response:any)=>{
     this.emp=<any>response;
     console.log(this.emp);
    });
  }
}
