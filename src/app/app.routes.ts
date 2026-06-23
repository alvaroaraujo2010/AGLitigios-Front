import { Routes } from '@angular/router';
import { adminAuthGuard } from './core/admin-auth.guard';
import { adminGuestGuard } from './core/admin-guest.guard';

export const routes: Routes = [
  {
    path: 'admin/login',
    canActivate: [adminGuestGuard],
    loadComponent: () =>
      import('./admin/login/admin-login.component').then((m) => m.AdminLoginComponent),
  },
  {
    path: 'admin',
    canActivate: [adminAuthGuard],
    loadComponent: () =>
      import('./admin/layout/admin-layout.component').then((m) => m.AdminLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'citas' },
      {
        path: 'citas',
        loadComponent: () =>
          import('./admin/appointments/admin-appointments.component').then(
            (m) => m.AdminAppointmentsComponent,
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'mision-vision',
        loadComponent: () =>
          import('./pages/mission-vision/mission-vision.component').then(
            (m) => m.MissionVisionComponent,
          ),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent,
          ),
      },
      {
        path: 'soluciones-inmobiliarias',
        loadComponent: () =>
          import('./pages/real-estate/real-estate.component').then(
            (m) => m.RealEstateComponent,
          ),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./pages/contact/contact.component').then((m) => m.ContactComponent),
      },
      {
        path: 'citas',
        loadComponent: () =>
          import('./pages/book/book.component').then((m) => m.BookComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
