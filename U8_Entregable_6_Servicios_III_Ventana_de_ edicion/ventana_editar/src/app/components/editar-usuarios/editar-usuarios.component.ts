import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioServiceService } from '../../services/usuario-service.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuarioComponent {
  usuario: any = { id: 0, nombre: '', correo: '' };

  constructor(
    public route: ActivatedRoute,
    private usuarioService: UsuarioServiceService,
    public router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.usuarioService.getUsuario(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  guardarCambios(): void {
    this.usuarioService.actualizarUsuario(this.usuario).subscribe(() => {
      alert('Usuario actualizado con éxito');
      this.router.navigate(['/']);
    });
  }
}