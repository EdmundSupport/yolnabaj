import { Component, OnInit } from '@angular/core';
import { salidas } from 'src/app/models/Salidas';
import { SalidasService } from 'src/app/services/salidas.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrls: ['./crear-salida.component.css']
})
export class CrearSalidaComponent implements OnInit {

  idP = 0;

  salida: salidas = {
    idsalidas: 0,
    fecha:'',
    nombre:'',
    direccion:'',
    nit:''
  }

  edit: boolean = false;

  constructor(private salidasService: SalidasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.salidasService.getSalida(params.id).subscribe(
        res => {
          //console.log(res);
          this.salida = res;
          this.edit = true;
          this.idP = params.id;
        },
        err => console.error(err)
      )
    }
    //console.log(params);
  }

  savesalida(){
    this.salidasService.saveSalida(this.salida).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/salidas']);
      },
      err => console.error(err)
    )
  }

  updatesalida(){
    console.log(this.salida.idsalidas);
    this.salidasService.updateSalida(this.idP, this.salida).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/salidas']);
      },
      err => console.error(err)
    )
  }

}
