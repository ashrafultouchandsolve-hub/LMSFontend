import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { HomePage } from './base/home-page/home-page';

export const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'homepage', component: HomePage},
    {path: '**', redirectTo: 'homepage'},
];
