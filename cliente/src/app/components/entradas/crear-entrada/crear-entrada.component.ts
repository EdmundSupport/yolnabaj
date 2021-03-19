import { Component, OnInit } from '@angular/core';
import { entradas } from 'src/app/models/Entradas';
import { EntradasService } from 'src/app/services/entradas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { detallesEntrada } from 'src/app/models/DetallesEntrada';

@Component({
  selector: 'app-crear-entrada',
  templateUrl: './crear-entrada.component.html',
  styleUrls: ['./crear-entrada.component.css']
})
export class CrearEntradaComponent implements OnInit {
  idP = 0;

  entrada: entradas = {
    identradas: 0,
    fecha:'',
    nombre:'',
    direccion:'',
    nit:''
  }

  /*detEntrada: detallesEntrada = {
    iddetalleEntrada:0,
    cantidad:0,
    nombre:'',
    precio:0,
    idproductos:0,
    identradas:0
  }*/


  edit: boolean = false;

  constructor(private entradasService: EntradasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.entradasService.getEntrada(params.id).subscribe(
        res => {
          //console.log(res);
          this.entrada = res;
          this.edit = true;
          this.idP = params.id;
        },
        err => console.error(err)
      )
    }
    //console.log(params);
  }

  saveEntrada(){
    this.entradasService.saveEntrada(this.entrada).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/entradas']);
      },
      err => console.error(err)
    )
  }

  updateEntrada(){
    console.log(this.entrada.identradas);
    this.entradasService.updateEntrada(this.idP, this.entrada).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/entradas']);
      },
      err => console.error(err)
    )
  }
}
