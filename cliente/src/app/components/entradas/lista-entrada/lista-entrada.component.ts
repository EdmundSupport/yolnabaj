import { Component, HostBinding, OnInit } from '@angular/core';
import { EntradasService } from "../../../services/entradas.service";

@Component({
  selector: 'app-lista-entrada',
  templateUrl: './lista-entrada.component.html',
  styleUrls: ['./lista-entrada.component.css']
})
export class ListaEntradaComponent implements OnInit {

  entradas: any = [];
  @HostBinding('class') classes = 'row';
  constructor(private entradasService: EntradasService) { }

  ngOnInit(): void {
    this.getEntradas();
  }

  getEntradas(){
    this.entradasService.getEntradas().subscribe(
      res => {
        this.entradas = res;
      },
      err => console.log(err)
    )
  }

  deleteEntrada(id: string){
    this.entradasService.deleteEntrada(id).subscribe(
      res => {
        console.log(res);
        this.getEntradas();
      },
      err => console.log(err)
    )
  }

  editEntrada(id: string){
    console.log(id);
  }

}
