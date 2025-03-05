import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent} from './pages/home/home.component';
import { AuthGuardService } from './servicios/auth-guard.service';

export const routes: Routes = [
        { path: '', component: LoginComponent }, //  Página por defecto
        { path: 'home', component:HomeComponent , canActivate: [AuthGuardService] }, // Ruta protegida
    ];
    
