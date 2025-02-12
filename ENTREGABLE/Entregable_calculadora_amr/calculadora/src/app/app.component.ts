import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  numero1!:number;/* Para que no estén inicializadas a ningún número por defecto */
  numero2!:number;
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
