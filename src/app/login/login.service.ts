import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginResultModel } from '../model/login-result-model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginService(email: string, password: string): Observable<LoginResultModel> {
    console.log("hola como estas");
    /*return this.http.post<LoginResultModel>(
      'http://localhost:8087/api/authenticate',
      {
        username: email,
        password: password,
        rememberMe: true
      },
      { observe: 'response' }
    ).pipe(map(authenticateSuccess.bind(this)));*/

    return this.http.get<LoginResultModel>(
      "http://localhost:8087/api/authenticate/"+email+"/"+password
    );
    //.pipe(map(authenticateSuccess.bind(this)));

    /*function authenticateSuccess(resp) {
      const bearerToken = resp.headers.get('Authorization');
      console.log(resp)
      if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        this.storeAuthenticationToken(jwt, true);
        return jwt;
      }
    }*/
  }
  storeAuthenticationToken(jwt, rememberMe) {
    if (rememberMe) {
      localStorage.store('authenticationToken', jwt);
    } else {
      sessionStorage.store('authenticationToken', jwt);
    }
  }
}
