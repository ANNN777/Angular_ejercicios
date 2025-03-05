import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {//traerse el token, y si no existe el token te echa. Y en caso contrario 
  //las rutas te echa. Si no hay token te echa.
  private router = inject(Router);
  canActivate(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

