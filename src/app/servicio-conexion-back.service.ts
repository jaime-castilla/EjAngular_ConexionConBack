import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './_modelo/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ServicioConexionBackService {


  listar():Observable<Proveedor[]>{
    return this.prov.get<Proveedor[]>('http://localhost:8080/productos/promediosproveedor')
  }

  constructor(private prov:HttpClient) { }
}
