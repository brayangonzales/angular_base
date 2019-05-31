import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from '../model/login-result-model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginService(email:string, password:string):Observable<LoginResultModel>{
    console.log("hola como estas");
    return this.http.post<LoginResultModel>('https://reqres.in/api/login',{
      email: email,
      password: password
    }); 
  }
}
