import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { OnboardingPreferences } from './auth/onboarding-preferences/onboarding-preferences';
import { HomePage } from './base/home-page/home-page';
import { authGuard } from './guards/auth.guard';
import { teacherGuard } from './guards/teacher.guard';
import { Profile } from './base/profile/profile';
import { CourseDetails } from './base/course-details/course-details';
import { Payment } from './shared/payment/payment';
import { Courses } from './base/courses/courses';
import { EnrolledCourse } from './base/enrolled-course/enrolled-course';

export const routes: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path: 'onboarding-preferences', component: OnboardingPreferences, canActivate: [authGuard]},
    {path: 'homepage', component: HomePage},
    {path: 'profile', component: Profile, canActivate: [authGuard]},
        {
            path: 'teacher',
            loadComponent: () => import('./base/teacher/teacher').then((m) => m.Teacher),
            canActivate: [authGuard, teacherGuard],
        },
        { path: 'courses', component: Courses },
        { path: 'course-details/:id', component: CourseDetails },
        { path: 'enrolled-course/:id', component: EnrolledCourse, canActivate: [authGuard] },
        { path: 'payment', component: Payment, canActivate: [authGuard] },
        {path: '**', redirectTo: 'homepage'},
];
