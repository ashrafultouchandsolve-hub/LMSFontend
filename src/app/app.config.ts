import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { JwtInterceptor } from './Service/jwt.interceptor';
import { ErrorInterceptor } from './Service/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    // JwtInterceptor আগে (Authorization header বসায়), তারপর ErrorInterceptor (response error handle করে)।
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideRouter(routes),
    provideAnimations(),
    // toastr.css angular.json-এ যুক্ত (এটা ছাড়া toast গুলো invisible ছিল) + brand styling styles.css-এ।
    provideToastr({
      positionClass: 'toast-top-right',
      timeOut: 4200,
      extendedTimeOut: 1500,
      progressBar: true,
      closeButton: true,
      maxOpened: 4,
      autoDismiss: true,
      preventDuplicates: true,
    })
  ]
};
