import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../modelos/usuario';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getListar() {
    return this.http.get<Usuario[]>("http://localhost:8087/pruebaAdmin");
  }
}
