import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { HomePage } from './base/home-page/home-page';
import { authGuard } from './guards/auth.guard';
import { teacherGuard } from './guards/teacher.guard';
import { Profile } from './base/profile/profile';
import { Teacher } from './base/teacher/teacher';

export const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'homepage', component: HomePage, canActivate: [authGuard]},
    {path: 'profile', component: Profile, canActivate: [authGuard]},
    {path: 'teacher', component: Teacher, canActivate: [authGuard, teacherGuard]},
    {path: '**', redirectTo: 'homepage'},
];
