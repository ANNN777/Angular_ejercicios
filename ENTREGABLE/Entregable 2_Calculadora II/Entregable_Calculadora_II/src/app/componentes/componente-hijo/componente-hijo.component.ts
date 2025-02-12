import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-hijo',
  imports: [FormsModule],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

  @Input()numero1_padre_number|any;
  @Input()numero2_padre_number|any;


  resultado!:number;
  
  sumar(){
    this.resultado = this.numero1 + this.numero2;
    
  }
  restar(){
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicacion(){
    this.resultado = this.numero1 * this.numero2;
  }
}
}
