import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsServiceService } from './servicios/pokemons-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon_s';
  resultados:any[]=[];
  constructor(private pokemonapi:PokemonsServiceService){
    this.getDatos();
  }

  getDatos():void{
    this.pokemonapi
    .getByUrl("https://pokeapi.co/api/v2/pokemon?limit=151")
    .subscribe( resp=>{
      this.resultados=resp;

    })/* Lo que antes hacíamos con el then para ir haciendo la respuesta lo hacemos con  */
  }
}
