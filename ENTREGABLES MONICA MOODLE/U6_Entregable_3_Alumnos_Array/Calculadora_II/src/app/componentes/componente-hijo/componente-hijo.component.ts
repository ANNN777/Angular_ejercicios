import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentePadreComponent } from '../componente-padre/componente-padre.component';

@Component({
  selector: 'app-componente-hijo',
  imports: [FormsModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

  @Input()numero1_padre:number|any;
  @Input()numero2_padre:number|any;

  resultado!:number;
  
  sumar(){
    this.resultado = this.numero1_padre + this.numero2_padre;
   
  }
  restar(){
    this.resultado = this.numero1_padre - this.numero2_padre;

  }
  multiplicacion(){
    this.resultado = this.numero1_padre * this.numero2_padre;

  }
}

