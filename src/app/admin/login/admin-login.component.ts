import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  username = '';
  password = '';
  readonly loading = signal(false);
  readonly errorMsg = signal<string | null>(null);

  submit(): void {
    this.errorMsg.set(null);
    if (!this.username.trim() || !this.password) {
      this.errorMsg.set('Indique usuario y contraseña.');
      return;
    }
    this.loading.set(true);
    this.auth.login(this.username.trim(), this.password).subscribe({
      next: () => {
        this.loading.set(false);
        void this.router.navigateByUrl('/admin/citas');
      },
      error: () => {
        this.loading.set(false);
        this.errorMsg.set('Usuario o contraseña incorrectos.');
      },
    });
  }
}
