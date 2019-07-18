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
  email = 'alex123';
  password = 'alex123';
  constructor(private api:LoginService, private customer:CustomerService, private router:Router) { }
  login(){
    this.api.loginService(this.email,this.password).subscribe(
      r => {
        console.log(r);
        console.log(r.result.token);
        if (r.result.token) {
          this.customer.setToken(r.result.token);
          this.router.navigateByUrl('/app');
        }
      },
      r => {
        alert(r.error.error);
      });
  }
}
