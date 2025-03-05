import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Servicio1Service } from './servicios/servicio1.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  providers:[Servicio1Service],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servivios_2';
  titulo!:string;
  mensaje:string="";
  /* Ahora tenemos que inyectar el servicio en el constructor del componente */
  constructor (private servicio1:Servicio1Service){}
  /* Cuando inyecto un servicio, es como declarar una variable y ya lo qué hace es poder ser usado dentro de muestra */
  /* El servicio se usa sobre todo para hacer peticiones al servidor. */
  
  muestra(){
    this.servicio1.muestramensaje(this.mensaje);
    this.titulo=this.servicio1.titulo;
    /* De un servicio puedo acceder a un servicio y también a sus propiedades. */
  }
}
