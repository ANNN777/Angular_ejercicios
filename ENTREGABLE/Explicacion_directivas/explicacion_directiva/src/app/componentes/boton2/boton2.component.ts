import { Component, Input, Output, EventEmitter } from '@angular/core';/* Los decoradores de este tipo hay que importarlos arriba */

@Component({
  selector: 'app-boton2',
  imports: [],
  templateUrl: './boton2.component.html',
  styleUrl: './boton2.component.css'
})
export class Boton2Component {
@Input() nombre_hijo:string|any;/* Una función que lo qué hace es llamar a la llamada del componente, este componente_hijo,
viene del app.component.html */
texto:string="Yo estoy en el hijo" /* Llamamos ahora del componente hijo al componente padre.  */
contenido2(){
  alert(this.nombre_hijo);
}
@Output() mensajeAlPadre = new EventEmitter<string>();/* EventEmitter es un evento que siempre está a la escucha */
enviarAlPadre() {
  this.mensajeAlPadre.emit(this.texto);
}
}

