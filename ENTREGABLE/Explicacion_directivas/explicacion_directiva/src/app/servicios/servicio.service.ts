import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
    muestramensaje(mensaje:string){
      alert(mensaje);
    }
  
}
