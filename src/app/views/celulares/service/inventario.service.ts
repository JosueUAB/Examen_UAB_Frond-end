import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from "rxjs";
import {obtenerCelulares} from '../interface/obtenerCelulares.interfaces';
import { Celulares } from '../models/celulares.model';

const url ='http://localhost:3000'
@Injectable({
  providedIn: 'root'
})



export class InventarioService {


  constructor(private http: HttpClient) {}

  //crear un Celular
  //crearCelular
  crearCelular(celulares:any){
    return this.http.post<Celulares>(`${url}/lista`,celulares);

   }

  //obtener lista de celulares

  getCelulares(){
    return this.http.get<obtenerCelulares>(`${url}/lista`)
    .pipe(
      map(resp=>resp.celulares),
    );
  }
   // Actualizar un celular
   actualizarCelular(id: string, celular: Celulares): Observable<Celulares> {
    return this.http.put<Celulares>(`${url}/lista/${id}`, celular);
  }


  //eliminar un celular
  eliminarcelular(id:string){
    return this.http.delete(`${url}/lista/${id}`);
  }


  detalleCelular(id:string){
    return this.http.get(`${url}/lista/${id}`);
  }

}
