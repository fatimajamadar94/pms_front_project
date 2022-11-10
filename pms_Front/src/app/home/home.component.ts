import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getdata:any[]=[];
    constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  getAllEmp(){
    this.userservice.getAllRegisterEmp().subscribe((response)=>{
      this.getdata=<any> response;
      console.log(this.getdata);
    })
}
}