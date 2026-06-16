import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Service/auth.service';

// শুধু logged-in Student (Role = 0) এই route দেখতে পারবে।
// Guest → login এ পাঠাও (returnUrl সহ), Teacher/Admin → home এ পাঠাও।
export const studentGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }

  const role = authService.getCurrentUser()?.role;
  if (role === 0) {
    return true;
  }

  // logged-in কিন্তু student নয় (teacher/admin) → home
  return router.createUrlTree(['/home']);
};
