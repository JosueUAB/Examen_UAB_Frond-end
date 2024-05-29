import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{obtenerVentas} from '../interface/obtenerVentas.interfaces';
import { Ventas } from '../models/ventas.model';

const url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) {}

  // Crear una venta
  crearVenta(venta: { ventas:any }){
    return this.http.post<Ventas>(`${url}/ventas`, venta);
  }

  // Obtener lista de ventas
  getVentas(){
    return this.http.get<obtenerVentas>(`${url}/ventas`)
    .pipe(
      map(resp => resp.ventas )
    )
  }
  // Obtener detalles de una venta por ID
  getVentaDetalle(id: string): Observable<Ventas> {
    return this.http.get<Ventas>(`${url}/ventas/${id}`);
  }

  // Actualizar una venta
  actualizarVenta(id: string, venta: any): Observable<Ventas> {
    return this.http.put<Ventas>(`${url}/ventasd/${id}`, venta);
  }

  // Eliminar una venta
  eliminarVenta(id: string): Observable<any> {
    return this.http.delete(`${url}/ventas/${id}`);
  }
}
