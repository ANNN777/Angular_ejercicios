import { Component, inject } from '@angular/core';
import { EnvioFormularioService } from '../../servicios/envio-formulario.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  private envio = inject(EnvioFormularioService);

  constructor(){}
  usuarioform:any={
    usuario:"",
    password:""
  };

  resultados!:any;
  muestra:boolean=false;
  mensaje:boolean=false;
  url:string="https://jsonplaceholder.typicode.com/posts";
  cabeceras=new HttpHeaders({
    'Content-Type':'application/json'
  })
  enviar(){

    this.envio.envioPost(this.url, this.usuarioform, this.cabeceras)
    .subscribe({
      next:(resp)=>{
        this.resultados=resp;
        this.muestra=true;
        Swal.fire({
          title:"Hemos podido contectar",
          icon:"success"
        })
      },

      error:(error)=>{
        Swal.fire({
          title:"No hemos podido contectar",
          icon:"error"
        })
      },
      complete:()=>{
        //this.mensaje=true,
      }
    })

  }
}
