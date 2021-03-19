import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/models/Productos';
import { ProductosService } from 'src/app/services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  idP = 0;
  producto: productos = {
    idproductos: 0,
    nombre:'',
    descripcion:'',
    img:''
  }

  edit: boolean = false;

  constructor(private productosService: ProductosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.productosService.getProducto(params.id).subscribe(
        res => {
          //console.log(res);
          this.producto = res;
          this.edit = true;
          this.idP = params.id;
        },
        err => console.error(err)
      )
    }
    //console.log(params);
  }

  saveProducto(){
    this.productosService.saveProducto(this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    )
  }

  updateProducto(){
    console.log(this.producto.idproductos);
    this.productosService.updateProducto(this.idP, this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    )
  }

}
