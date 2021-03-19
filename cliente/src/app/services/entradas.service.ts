import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { entradas } from '../models/Entradas';
import { Observable } from 'rxjs';
import { detallesEntrada } from '../models/DetallesEntrada';


@Injectable({
  providedIn: 'root'
})
export class EntradasService {
  API_URI = 'http://127.0.0.1:3000/api';

  constructor(private http: HttpClient) { }

  getEntradas(){
    return this.http.get(`${this.API_URI}/entradas`);
  }

  getEntrada(id: string){
    return this.http.get(`${this.API_URI}/entradas/${id}`);
  }

  deleteEntrada(id: string){
    return this.http.delete(`${this.API_URI}/entradas/${id}`);
  }

  saveEntrada(entrada: entradas){
    return this.http.post(`${this.API_URI}/entradas`, entrada);
  }

  updateEntrada(id: string|number, entrada: entradas): Observable<entradas> {
    return this.http.put(`${this.API_URI}/entradas/${id}`, entrada);
  }
}
