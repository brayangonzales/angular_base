import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../login/customer.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogin:Boolean;
  constructor(private custom:CustomerService) { 
  }
  ngOnInit() {
    this.isLogin=!this.custom.isLogged();
  }

}
