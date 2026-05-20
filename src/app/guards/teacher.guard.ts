import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Service/auth.service';

export const teacherGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const currentUser = authService.getCurrentUser() as { role?: number } | null;
  if (currentUser?.role === 1) {
    return true;
  }

  return router.createUrlTree(['/homepage']);
};
