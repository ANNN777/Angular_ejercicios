import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componentes/componentes/componente1/componente1.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Componente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo2';
  nombre:string="antonio";/* Declaro la variable pero no la inciallizo.  */
  texto1:string="";
  clase:string="verde";
  mitexto="Mi página web";
  evalua:boolean=true;
  nombres:string[]=["Juan","Maria","Pedro","Ana"];/* Array de String definidos por una variable llamanda nombres */
  muestra(){
    if (this.clase === "verde") {
      this.clase = "violeta";
    } else if (this.clase === "violeta"){
      this.clase = "verde";
    }
  }
  ruta:String="images/vaporwave_1.jpg";
}
