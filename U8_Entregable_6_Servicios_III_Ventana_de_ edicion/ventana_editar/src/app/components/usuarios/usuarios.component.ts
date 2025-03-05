import { Component } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario/usuario.models';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioServiceService, public router: Router) {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.getByUrl().subscribe(data => {
      this.usuarios = data;
    });
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/editar', id]);
  }
}