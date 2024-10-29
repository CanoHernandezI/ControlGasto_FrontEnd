import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Presupuesto } from '../models/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  private API_URI = 'https://controlgasto-backend.onrender.com/presupuesto';

  constructor(private http: HttpClient) { }

  getPresupuestos(idUser: string): Observable<Presupuesto[]> {
    return this.http.get<{ presupuestos: Presupuesto[] }>(`${this.API_URI}/${idUser}`).pipe(
      map(response => response.presupuestos)
    );
  }  
}
