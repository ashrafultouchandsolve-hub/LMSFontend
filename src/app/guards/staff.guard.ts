import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Service/auth.service';

/** Allows teachers (role 1) and admins (role 2) — used for exam grading pages both can manage. */
export const staffGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const currentUser = authService.getCurrentUser() as { role?: number } | null;
  if (currentUser?.role === 1 || currentUser?.role === 2) {
    return true;
  }

  return router.createUrlTree(['/homepage']);
};
