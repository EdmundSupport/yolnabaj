import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { productos } from '../models/Productos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URI = 'http://127.0.0.1:3000/api';

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  deleteProducto(id: string){
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }

  saveProducto(producto: productos){
    return this.http.post(`${this.API_URI}/productos`, producto);
  }

  updateProducto(id: string|number, producto: productos): Observable<productos> {
    return this.http.put(`${this.API_URI}/productos/${id}`, producto);
  }
}
