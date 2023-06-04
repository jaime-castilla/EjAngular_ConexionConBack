import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EjPruebaConexionConBackComponent } from './ej-prueba-conexion-con-back/ej-prueba-conexion-con-back.component';
import { EjPrueba1ConexionConBackComponent } from './ej-prueba1-conexion-con-back/ej-prueba1-conexion-con-back.component';
import { Ej2ConexionConBackComponent } from './ej2-conexion-con-back/ej2-conexion-con-back.component';

@NgModule({
  declarations: [
    AppComponent,
    EjPruebaConexionConBackComponent,
    EjPrueba1ConexionConBackComponent,
    Ej2ConexionConBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
