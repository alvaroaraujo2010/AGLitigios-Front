import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  const url = req.url;
  const isOurApi = url.includes('/api/');
  const isLogin = url.includes('/api/auth/login');
  if (token && isOurApi && !isLogin) {
    return next(
      req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      }),
    );
  }
  return next(req);
};
