import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CreateAppointmentPayload {
  nombreCompleto: string;
  telefono: string;
  email: string;
  motivoConsulta: string;
  fechaPreferida: string;
  horaPreferida?: string;
}

export interface Appointment {
  id: string;
  nombreCompleto: string;
  telefono: string;
  email: string;
  motivoConsulta: string;
  fechaPreferida: string;
  horaPreferida: string | null;
  estado: string;
  createdAt: string;
  updatedAt: string;
}

export interface HealthResponse {
  ok: boolean;
  service: string;
  time: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentsService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  health(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.base}/health`);
  }

  create(body: CreateAppointmentPayload): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.base}/appointments`, body);
  }
}
