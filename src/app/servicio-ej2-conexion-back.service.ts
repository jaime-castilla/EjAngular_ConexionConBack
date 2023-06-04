import { Injectable } from '@angular/core';
import { Inventario } from './_modelo/inventario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioEj2ConexionBackService {

  listar():Observable<Inventario[]>{
    return this.inv.get<Inventario[]>('http://localhost:8080/productos/inventarioproveedor')
  }

  constructor(private inv:HttpClient) { }
}
