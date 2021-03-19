import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/productos/lista/lista.component';
import { CrearComponent } from "./components/productos/crear/crear.component";

import { CrearEntradaComponent } from './components/entradas/crear-entrada/crear-entrada.component';
import { ListaEntradaComponent } from './components/entradas/lista-entrada/lista-entrada.component';

import { ListaSalidaComponent } from './components/salidas/lista-salida/lista-salida.component';
import { CrearSalidaComponent } from './components/salidas/crear-salida/crear-salida.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch: 'full',
  },
  {
    path:'productos',
    component:ListaComponent
  },{
    path:'productos/add',
    component: CrearComponent
  },{
    path:'productos/edit/:id',
    component: CrearComponent
  },
  {
    path:'entradas',
    component:ListaEntradaComponent
  },{
    path:'entradas/add',
    component: CrearEntradaComponent
  },{
    path:'entradas/edit/:id',
    component: CrearEntradaComponent
  },
  {
    path:'salidas',
    component:ListaSalidaComponent
  },{
    path:'salidas/add',
    component: CrearSalidaComponent
  },{
    path:'salidas/edit/:id',
    component: CrearSalidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
