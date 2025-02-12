import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {
@Input() nombre_padre:string|any; /* si se pone un splo string te pide inicializar el padre */
}
