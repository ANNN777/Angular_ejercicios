import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  imports: [],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  title = 'calculadora';

  numero1!:number;

  nummero2!:number;

}
