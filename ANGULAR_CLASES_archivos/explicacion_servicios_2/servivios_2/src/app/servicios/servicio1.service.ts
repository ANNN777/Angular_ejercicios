import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  /* Creamos una variable de tipo String */
titulo:string="Esto es un dato del servicio";

  constructor() { }
  muestramensaje(mensaje:string){
    alert(mensaje);
  }
}
