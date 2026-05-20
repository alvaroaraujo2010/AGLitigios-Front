import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Si ya hay sesión, no mostrar login de nuevo. */
export const adminGuestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return router.createUrlTree(['/admin/citas']);
  }
  return true;
};
