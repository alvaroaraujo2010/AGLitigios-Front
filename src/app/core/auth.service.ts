import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginResponse {
  access_token: string;
  username: string;
  role: string;
}

const TOKEN_KEY = 'agliti_staff_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  private readonly tokenSig = signal<string | null>(
    typeof sessionStorage !== 'undefined'
      ? sessionStorage.getItem(TOKEN_KEY)
      : null,
  );

  readonly token = this.tokenSig.asReadonly();
  readonly isLoggedIn = computed(() => !!this.tokenSig());

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap((res) => {
          sessionStorage.setItem(TOKEN_KEY, res.access_token);
          this.tokenSig.set(res.access_token);
        }),
      );
  }

  logout(): void {
    sessionStorage.removeItem(TOKEN_KEY);
    this.tokenSig.set(null);
  }
}
