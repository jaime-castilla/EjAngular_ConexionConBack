import { Component } from '@angular/core';
import { ServicioEj2ConexionBackService } from '../servicio-ej2-conexion-back.service';
import { Inventario } from '../_modelo/inventario';

@Component({
  selector: 'app-ej2-conexion-con-back',
  templateUrl: './ej2-conexion-con-back.component.html',
  styleUrls: ['./ej2-conexion-con-back.component.css']
})
export class Ej2ConexionConBackComponent {

  inventarioProveedor: Inventario[] = []

  constructor(private servicio: ServicioEj2ConexionBackService){}

  ngOnInit(): void {
    this.servicio.listar()
      .subscribe(datos => {this.inventarioProveedor = datos;})
    }

}
