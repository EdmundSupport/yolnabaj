import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { salidas } from '../models/Salidas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalidasService {
  API_URI = 'http://127.0.0.1:3000/api';

  constructor(private http: HttpClient) { }

  getSalidas(){
    return this.http.get(`${this.API_URI}/salidas`);
  }

  getSalida(id: string){
    return this.http.get(`${this.API_URI}/salidas/${id}`);
  }

  deleteSalida(id: string){
    return this.http.delete(`${this.API_URI}/salidas/${id}`);
  }

  saveSalida(salida: salidas){
    return this.http.post(`${this.API_URI}/salidas`, salida);
  }

  updateSalida(id: string|number, salida: salidas): Observable<salidas> {
    return this.http.put(`${this.API_URI}/salidas/${id}`, salida);
  }
}
