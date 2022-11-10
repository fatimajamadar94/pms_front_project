import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:string=""
  constructor(private route:Router) { }

  ngOnInit() {
   // this.username=sessionStorage.getItem("data");
   this.username="Fatima";
  }
  onLogout(){
    sessionStorage.removeItem("data");
    sessionStorage.clear();
    this.route.navigate(["/"]);
  }
}
