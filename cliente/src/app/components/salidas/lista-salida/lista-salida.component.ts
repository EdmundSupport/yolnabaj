import { Component, OnInit, HostBinding } from '@angular/core';
import { SalidasService } from "../../../services/salidas.services";

@Component({
  selector: 'app-lista-salida',
  templateUrl: './lista-salida.component.html',
  styleUrls: ['./lista-salida.component.css']
})
export class ListaSalidaComponent implements OnInit {

  salidas: any = [];
  @HostBinding('class') classes = 'row';
  constructor(private salidasService: SalidasService) { }

  ngOnInit(): void {
    this.getSalidas();
  }

  getSalidas(){
    this.salidasService.getSalidas().subscribe(
      res => {
        this.salidas = res;
      },
      err => console.log(err)
    )
  }

  deleteSalida(id: string){
    this.salidasService.deleteSalida(id).subscribe(
      res => {
        console.log(res);
        this.getSalidas();
      },
      err => console.log(err)
    )
  }

  editSalida(id: string){
    console.log(id);
  }

}
