import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://localhost:8000/api'; // Ajusta la URL según sea necesario

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` });
  }

  getEncuestas(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/encuestas`, { headers });
  }

  createEncuesta(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/encuestas`, data, { headers });
  }

  deleteEncuesta(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/encuestas/${id}`, { headers });
  }
  getCursos(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/cursos`, { headers });
  }
  getInstituciones(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/instituciones`, { headers });
  }

  createInstitucion(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/instituciones`, data, { headers });
  }

  getEncuestasPorCurso(curso_id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/data/curso/${curso_id}`, { headers }); // Ajustar la ruta
  }

  getUsuarios(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/usuarios`, { headers });
  }

  getResultados(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/data`, { headers });
  }

  loginUser(credentials: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  loginUsuario(credentials: { codigo: string, password: string }) {
    return this.http.post(`${this.apiUrl}/login-usuario`, credentials);
  }

  getUserInfo(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  createUsuario(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/usuarios`, data, { headers });
  }

  updateUsuario(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.apiUrl}/usuarios/${data.id}`, data, { headers });
  }

  saveData(enlace: string, encuesta_id: number, curso_id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    const data = {
      enlace: enlace, respuestas: JSON.stringify([]), // Dejar vacío por ahora
      encuesta_id: encuesta_id,
      curso_id: curso_id
    };
    return this.http.post(`${this.apiUrl}/data`, data, { headers });
  }

  guardarRespuesta(dataId: number, respuesta: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/data/${dataId}/respuesta`, { respuesta: respuesta }, { headers });
  }

}
