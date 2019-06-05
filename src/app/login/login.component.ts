import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = 'eve.holt@reqres.in';
  password = 'cityslicka';
  constructor(private api:LoginService, private customer:CustomerService, private router:Router) { }
  login(){
    this.api.loginService(this.email,this.password).subscribe(
      r => {
        if (r.token) {
          this.customer.setToken(r.token);
          this.router.navigateByUrl('/app');
        }
      },
      r => {
        alert(r.error.error);
      });
  }
}
