import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Boton2Component } from "./componentes/boton2/boton2.component";
import { ServicioService } from './servicios/servicio.service';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, Boton2Component],
  templateUrl: './app.component.html',
  providers:[ServicioService],
  styleUrl: './app.component.css',

})
export class AppComponent {
  constructor (private servicio:ServicioService){}
  title = 'explicacion_directiva';
  alumnos:string[]=["Carlos","Luis","Carmen"]; /* Queremos representar este Array en el componente principal .html sin tener
  que conocer cuántos elementos tiene este array */
  clase:string="rojo";
  muestra:boolean=true;/* apunta a la función muestra del html.  */
  nombre!:string; /* Si hacemos esto no necesitamos inicializar la variable */
  numero!:number;
  mensaje:string="";
  contenido(){
    alert(this.nombre);
    alert(this.numero);
  }
  recibirMensaje(mensaje:string) {
    this.mensaje = mensaje;
  }
  muestra1(){
    this.servicio.muestramensaje(this.mensaje);
  }
}
