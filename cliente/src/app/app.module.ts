import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CrearComponent } from './components/productos/crear/crear.component';
import { ListaComponent } from './components/productos/lista/lista.component';

import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ProductosService } from './services/productos.service';
import { SalidasService } from './services/salidas.services';
import { EntradasService } from './services/entradas.service';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearEntradaComponent } from './components/entradas/crear-entrada/crear-entrada.component';
import { ListaEntradaComponent } from './components/entradas/lista-entrada/lista-entrada.component';
import { ListaSalidaComponent } from './components/salidas/lista-salida/lista-salida.component';
import { CrearSalidaComponent } from './components/salidas/crear-salida/crear-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CrearComponent,
    ListaComponent,
    CrearEntradaComponent,
    ListaEntradaComponent,
    ListaSalidaComponent,
    CrearSalidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    ProductosService,
    SalidasService,
    EntradasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
