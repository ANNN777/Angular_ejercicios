import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuarios/editar-usuarios.component';

export const routes: Routes = [
    { path: '', component: UsuariosComponent },
    { path: 'editar', component: EditarUsuarioComponent}
];