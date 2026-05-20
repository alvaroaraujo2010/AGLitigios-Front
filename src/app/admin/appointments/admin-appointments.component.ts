import { DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { AdminAppointmentsService, AppointmentEstado } from '../../core/admin-appointments.service';
import type { Appointment } from '../../core/appointments.service';

@Component({
  selector: 'app-admin-appointments',
  imports: [DatePipe],
  templateUrl: './admin-appointments.component.html',
  styleUrl: './admin-appointments.component.scss',
})
export class AdminAppointmentsComponent implements OnInit {
  private readonly api = inject(AdminAppointmentsService);

  readonly rows = signal<Appointment[]>([]);
  readonly loadError = signal<string | null>(null);
  readonly savingId = signal<string | null>(null);

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.loadError.set(null);
    this.api.list().subscribe({
      next: (list) => this.rows.set(list),
      error: () => this.loadError.set('No se pudo cargar el listado. Revise sesión y API.'),
    });
  }

  onEstadoChange(row: Appointment, ev: Event): void {
    const select = ev.target as HTMLSelectElement;
    const estado = select.value as AppointmentEstado;
    if (estado === row.estado) return;
    this.savingId.set(row.id);
    this.api.updateEstado(row.id, estado).subscribe({
      next: (updated) => {
        this.savingId.set(null);
        this.rows.update((list) =>
          list.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)),
        );
      },
      error: () => {
        this.savingId.set(null);
        select.value = row.estado;
        this.loadError.set('No se pudo actualizar el estado.');
      },
    });
  }
}
