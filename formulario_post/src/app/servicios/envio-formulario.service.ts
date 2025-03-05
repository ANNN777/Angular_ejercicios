import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioFormularioService {

  constructor(private http: HttpClient) { }
  envioPost (url: string, data: any, headers: HttpHeaders): Observable<any>{
    const httpOptions = {
      //Si no se especifican headers, usa JSON por defecto
      headers: headers || new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<any>(url, data, httpOptions);
  }

}
