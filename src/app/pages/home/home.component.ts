import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppointmentsService } from '../../core/appointments.service';
import { SITE } from '../../core/site-data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly api = inject(AppointmentsService);

  readonly site = SITE;
  /** En Netlify (demo) no hay API; ocultamos el aviso de conexión. */
  readonly showApiCheck = !!environment.apiUrl;
  readonly apiStatus = signal<'idle' | 'ok' | 'error'>('idle');

  ngOnInit(): void {
    if (!this.showApiCheck) {
      return;
    }
    this.api.health().subscribe({
      next: () => this.apiStatus.set('ok'),
      error: () => this.apiStatus.set('error'),
    });
  }
}
