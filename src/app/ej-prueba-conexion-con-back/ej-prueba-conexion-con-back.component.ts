import { Component } from '@angular/core';
import { ServicioConexionBackService } from '../servicio-conexion-back.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ej-prueba-conexion-con-back',
  templateUrl: './ej-prueba-conexion-con-back.component.html',
  styleUrls: ['./ej-prueba-conexion-con-back.component.css']
})
export class EjPruebaConexionConBackComponent {

  proveedores = new FormGroup(
    {
      nombreProveedor: new FormControl(''),
      precioUnitario: new FormControl('')
    }
  )


  constructor(private servicio: ServicioConexionBackService){}

  // ngOnInit(): void {
  //   this.servicio.listar()
  //     .subscribe(datos => {
  //       this.proveedores = datos;
  //     })
  //   }

  

}
