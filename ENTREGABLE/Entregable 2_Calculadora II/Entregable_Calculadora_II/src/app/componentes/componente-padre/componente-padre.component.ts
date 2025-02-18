import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  imports: [FormsModule, ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  title = 'calculadora';

  numero1!:number;

  nummero2!:number;

}
