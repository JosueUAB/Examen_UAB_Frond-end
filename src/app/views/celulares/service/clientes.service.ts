import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from "rxjs";
import {obtenerClientes} from '../interface/obtenerClientes.interfaces';
import { Clientes } from '../models/clientes.model';

const url ='http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) {}


  // Crear un cliente
  crearCliente(cliente: any): Observable<Clientes> { // Cambia 'Cliente' por 'Clientes'
    return this.http.post<Clientes>(`${url}/cliente`, cliente); // Cambia 'Cliente' por 'Clientes'
  }

  // Obtener lista de clientes
  getClientes(){
    return this.http.get<obtenerClientes>(`${url}/cliente`)
    .pipe(
      map(resp=>resp.clientes)
    );
  }

  // Obtener detalles de un cliente por ID
  getClienteDetalle(id: string): Observable<Clientes> { // Cambia 'Cliente' por 'Clientes'
    return this.http.get<Clientes>(`${url}/cliente/${id}`); // Cambia 'Cliente' por 'Clientes'
  }

  // Actualizar un cliente
  actualizarCliente(id: string, cliente: any): Observable<Clientes> { // Cambia 'Cliente' por 'Clientes'
    return this.http.put<Clientes>(`${url}/cliente/${id}`, cliente); // Cambia 'Cliente' por 'Clientes'
  }

  // Eliminar un cliente
  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${url}/cliente/${id}`);
  }
}
