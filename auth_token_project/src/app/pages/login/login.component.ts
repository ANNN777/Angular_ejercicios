import { Component,inject } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
standalone:true,
imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  email!:string;
  password!:string;
  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {/* Nos suscribimos a la respuesta.  */
        // Almacenar los tokens en localStorage usando el servicio
        this.authService.storeTokens(response.accessToken);//
        this.router.navigate(['/home']);//Le digo que se vaya al home
      },
      error: (error) => {
        console.error('Login error', error);
      }
    });
  }
}
