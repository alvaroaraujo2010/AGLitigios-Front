import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppointmentsService } from '../../core/appointments.service';

@Component({
  selector: 'app-book',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly api = inject(AppointmentsService);

  readonly submitting = signal(false);
  readonly successId = signal<string | null>(null);
  readonly errorMsg = signal<string | null>(null);

  readonly form = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(160)]],
    telefono: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(160)]],
    motivoConsulta: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(4000)]],
    fechaPreferida: ['', [Validators.required]],
    horaPreferida: [''],
  });

  submit(): void {
    this.errorMsg.set(null);
    this.successId.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const hora = v.horaPreferida?.trim();
    this.submitting.set(true);
    this.api
      .create({
        nombreCompleto: v.nombreCompleto.trim(),
        telefono: v.telefono.trim(),
        email: v.email.trim(),
        motivoConsulta: v.motivoConsulta.trim(),
        fechaPreferida: v.fechaPreferida,
        ...(hora ? { horaPreferida: hora } : {}),
      })
      .subscribe({
        next: (row) => {
          this.submitting.set(false);
          this.successId.set(row.id);
          this.form.reset();
        },
        error: (err: HttpErrorResponse) => {
          this.submitting.set(false);
          const body = err.error as { message?: string | string[] } | null;
          let msg = 'No se pudo enviar la solicitud. Compruebe el servidor y los datos.';
          if (body?.message) {
            msg = Array.isArray(body.message) ? body.message.join(' ') : String(body.message);
          }
          this.errorMsg.set(msg);
        },
      });
  }
}
