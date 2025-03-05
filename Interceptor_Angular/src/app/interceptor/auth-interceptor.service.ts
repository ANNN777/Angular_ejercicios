import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');
  // Clonamos la solicitud para agregar el token si está presente
  const clonedReq = token 
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;
  // Realizamos la solicitud
  const requestObservable = next(clonedReq);
  // Manejamos la respuesta con subscribe
  requestObservable.subscribe({
    next: (event) => {
      // Procesamos la respuesta exitosa (sin hacer nada aquí, solo dejamos que pase)
    },
    error: (error) => {
      if (error.status === 401) {
        // Si el error es 401, redirigimos al usuario a la página de login
        authService.logout();  // Opcional: cerrar sesión (limpiar tokens)
        router.navigate(['']);  // Redirigimos al login
      } else {
        // Si hay otro error, también redirigimos al login
        router.navigate(['']);  // Redirigimos al login
      }
    }
  });
  return requestObservable;
};
