import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}

