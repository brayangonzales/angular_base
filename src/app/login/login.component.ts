import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = 'peter@klaven';
  password = 'cityslicka';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  /*login(){
    this.api.loginService(this.email,this.password).subscribe(
      r => {
        console.log(r)
      }
    )
  }*/

}
