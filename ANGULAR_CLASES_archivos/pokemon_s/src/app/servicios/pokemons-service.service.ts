import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/* Objeto para manejar el fetch de Javascript */
import { Observable } from 'rxjs';/* Observales, como ese then que le hacíamos nosotros a las promesas */


@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {

  constructor(private http:HttpClient) {}
    
    getByUrl(url:string): Observable<any[]>{ /* Le paso la url como argumento para que el servicio haga la petición */
      
      return this.http.get<any[]>(url);/* Ponemos any, por qué aún no sabemos que vamos a obtener */
   }
}

