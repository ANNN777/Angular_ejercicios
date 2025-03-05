import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

 alumnos: Alumno[] = [
 new Alumno ("Olga", 32, "2ºDAW"),
  new Alumno ("Lucía", 36, "1ºDAW"),
  new Alumno ("José", 41, "2ºDAW"),
 new Alumno ("Rocío", 22, "1ºDAW")
 ];
constructor() { 

}

}
