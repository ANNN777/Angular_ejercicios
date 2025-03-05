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
  login(credentials: { email: string; password: string }): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string}>(`${this.apiUrl}/users`, credentials);
  }
  // Método de logout
  logout() {
    this.clearTokens();
    this.router.navigate(['']);
  }
  // Hacemos storeTokens público para que el componente pueda llamarlo
  storeTokens(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.tokenSubject.next(accessToken);
    //this.cookie.set('accessToken',accessToken);
  }
  // Limpiar tokens del almacenamiento local y actualizar el estado
  private clearTokens() {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
  }
}
