import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private url = "http://localhost:3000/usuarios"; // URL de la API

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getByUrl(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  // Obtener un usuario por ID
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  // Actualizar un usuario
  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${usuario.id}`, usuario);
  }
}


