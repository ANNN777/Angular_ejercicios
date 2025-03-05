import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuarioServiceService } from './services/usuario-service.service';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ventana_editar';
  }

  