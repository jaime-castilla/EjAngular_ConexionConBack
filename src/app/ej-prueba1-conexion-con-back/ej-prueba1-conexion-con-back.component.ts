import { Component } from '@angular/core';
import { ServicioConexionBackService } from '../servicio-conexion-back.service';
import { Proveedor } from '../_modelo/proveedor';

@Component({
  selector: 'app-ej-prueba1-conexion-con-back',
  templateUrl: './ej-prueba1-conexion-con-back.component.html',
  styleUrls: ['./ej-prueba1-conexion-con-back.component.css']
})
export class EjPrueba1ConexionConBackComponent {

  proveedores: Proveedor[]=[]

  constructor(private servicio: ServicioConexionBackService){}

  ngOnInit(): void {
    this.servicio.listar()
      .subscribe(datos => {this.proveedores = datos;})
    }

}
