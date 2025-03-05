import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../models/alumno.model';
import { BaseDeDatosService } from '../../servicios/base-de-datos.service';

@Component({
  selector: 'app-mostrar-alumnos',
  imports: [FormsModule],
  templateUrl: './mostrar-alumnos.component.html',
  styleUrl: './mostrar-alumnos.component.css'
})
export class MostrarAlumnosComponent {

  alumnos!:Alumno[];
  constructor(private servicio_base_datos: BaseDeDatosService) {
    this.alumnos=this.servicio_base_datos.alumnos
  }

}
