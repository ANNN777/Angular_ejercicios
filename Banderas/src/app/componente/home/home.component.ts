import { Component } from '@angular/core';
import { ConsultapaisesService } from '../../servicios/consultapaises.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'banderas';
  
  seleccionado!:string;//variable que se llame Europe de tipo String dónde tiene que casar con el valor del select
  //que usemos. 
   resultados!:any[];
  
  constructor(private banderasApi:ConsultapaisesService){
  
    //this.getDatos();
  
  }
  
  getDatos(): void {
    this.banderasApi
      .getByUrl("https://restcountries.com/v3.1/region/" + this.seleccionado)
      .subscribe(resp => {
        this.resultados = resp;
      }, error => {
        console.error('Error al obtener los datos', error);
      });
  }
  
  }
  

  
