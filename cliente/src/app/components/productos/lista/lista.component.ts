import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductosService } from "../../../services/productos.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: any = [];
  @HostBinding('class') classes = 'row';
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    )
  }

  deleteProducto(id: string){
    this.productosService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.getProductos();
      },
      err => console.log(err)
    )
  }

  editProducto(id: string){
    console.log(id);
  }
}
