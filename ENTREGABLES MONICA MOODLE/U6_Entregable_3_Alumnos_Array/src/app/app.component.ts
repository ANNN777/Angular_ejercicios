import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarAlumnosComponent } from "./componente/mostrar-alumnos/mostrar-alumnos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostrarAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'U8_Entregable_3';
}
