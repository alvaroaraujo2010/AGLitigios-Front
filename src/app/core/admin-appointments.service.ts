import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Appointment } from './appointments.service';

export type AppointmentEstado = 'pendiente' | 'confirmada' | 'cancelada';

@Injectable({ providedIn: 'root' })
export class AdminAppointmentsService {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  list(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.base}/admin/appointments`);
  }

  updateEstado(id: string, estado: AppointmentEstado): Observable<Appointment> {
    return this.http.patch<Appointment>(`${this.base}/admin/appointments/${id}`, {
      estado,
    });
  }
}
