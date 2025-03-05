import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:3000';
  private tokenSubject = new BehaviorSubject<string | null>(null);

 // private cookie=inject(CookieService);
  //token$ = this.tokenSubject.asObservable();
  // Método de login que devuelve el Observable de la petición HTTP

  //Este servicio me va a decir que almacenemos correctamente el token y que luego hacemos un logout correcto. 

  login(credentials: { email: string; password: string }): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string}>(`${this.apiUrl}/users`, credentials);
    /* Cuando me loguee me va a devolver un Observable, y el Observable lo único que trae es el token. 
    apiUrl lo que tengo que poner es la URL de la API que necesito. y el endpoint concreto que nos devuelve el token.
     */
    /*Lo que hacemos una petición http. post ,e es el método del http cliente, post sirve para
    enviar al servidor, el envío el email y la contraseña. Lo que me devuelve es el token, al introducir el usuario y
    la contraseña*/
  }
  // Método de logout
  logout() {
    this.clearTokens();
    this.router.navigate(['']);
  }
  // Hacemos storeTokens público para que el componente pueda llamarlo
  storeTokens(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.tokenSubject.next(accessToken);//el token está actualizado y guardado correctmente. 
    //this.cookie.set('accessToken',accessToken);//Esto es para guardar el token en el servicios. 
  }
  // Limpiar tokens del almacenamiento local y actualizar el estado, y hacer una propagación de un token null. 
  private clearTokens() {
    localStorage.removeItem('accessToken');//el token si lo guardo en el localStorage se queda ahí de manera permanente. 
    this.tokenSubject.next(null);
  }
}
