import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');//De dónde lo tenga me traigo el token, en este caso del localStorage

  // Clonamos la solicitud para agregar el token si está presente. Las peticiones en Angular son inalterable. 
  const clonedReq = token 
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  // Realizamos la solicitud
  const requestObservable = next(clonedReq);//Llamamos a la petición con el token y la estoy volviendo a llamar. 
  //Y con lo que me devuelve la petición proceso la respuesta. 

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
  return requestObservable;//Devuelvo el Observable de la petición. Si es correcto te devuelvo el Observable para
  //hacer lo que tenga que hacer. 
};
