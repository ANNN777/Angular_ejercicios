import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componentes/componente1/componente1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1_standalone';
}
