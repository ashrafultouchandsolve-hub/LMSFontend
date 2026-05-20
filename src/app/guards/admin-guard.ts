import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Service/auth.service';

export const adminGuard: CanActivateFn = (_route, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const currentUser = authService.getCurrentUser() as { role?: number } | null;

  // Role 2 = Admin
  if (currentUser?.role === 2) {
    return true;
  }

  return router.createUrlTree(['/homepage']);
};