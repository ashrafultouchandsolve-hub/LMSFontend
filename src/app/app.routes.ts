import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { OnboardingPreferences } from './auth/onboarding-preferences/onboarding-preferences';
import { HomePage } from './base/home-page/home-page';
import { authGuard } from './guards/auth.guard';
import { teacherGuard } from './guards/teacher.guard';
import { adminGuard } from './guards/admin-guard' // ✅ নতুন
import { Profile } from './base/profile/profile';
import { CourseDetails } from './base/course-details/course-details';
import { Payment } from './shared/payment/payment';
import { Courses } from './base/courses/courses';
import { EnrolledCourse } from './base/enrolled-course/enrolled-course';
import { MyCourses } from './user/my-courses/my-courses';
import { Assignment } from './user/assignment/assignment';
import { MyClasses } from './user/my-classes/my-classes';
import { Certificates } from './user/certificates/certificates';
import { QuizEditorComponent } from './base/quiz-editor/quiz-editor';
import { QuizAttemptComponent } from './base/quiz-attempt/quiz-attempt';
import { VideoHistoryComponent } from './base/video-history/video-history';
import { Leaderboard } from './base/leaderboard/leaderboard';
import { EnrolledStudents } from './base/enrolled-students/enrolled-students';
import { FreeClass } from './base/free-class/free-class';
import { LiveClassRoom } from './shared/live-class-room/live-class-room';

export const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'register/student', component: Register },
    { path: 'register/teacher', component: Register },
    { path: 'onboarding-preferences', component: OnboardingPreferences, canActivate: [authGuard] },
    { path: 'homepage', component: HomePage },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    {
        path: 'teacher',
        loadComponent: () => import('./base/teacher/teacher').then((m) => m.Teacher),
        canActivate: [authGuard, teacherGuard],
    },
    // ✅ Admin route — শুধু Admin ঢুকতে পারবে
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
        canActivate: [adminGuard],
    },
    { path: 'courses', component: Courses },
    { path: 'course-details/:id', component: CourseDetails },
    { path: 'enrolled-course/:id', component: EnrolledCourse, canActivate: [authGuard] },
    { path: 'payment', component: Payment, canActivate: [authGuard] },
    { path: 'my-courses', component: MyCourses, canActivate: [authGuard] },
    { path: 'assignments', component: Assignment, canActivate: [authGuard] },
    { path: 'myClasses', component: MyClasses, canActivate: [authGuard] },
    { path: 'certificates', component: Certificates, canActivate: [authGuard] },
    { path: 'quiz-editor/:lessonId', component: QuizEditorComponent, canActivate: [authGuard, teacherGuard] },
    { path: 'quiz/:lessonId', component: QuizAttemptComponent, canActivate: [authGuard] },
    { path: 'history', component: VideoHistoryComponent, canActivate: [authGuard] },
    { path: 'enrolled-students/:courseId', component: EnrolledStudents, canActivate: [authGuard, teacherGuard] },
    {
  path: 'live-class/:id',
  loadComponent: () => import('./shared/live-class-room/live-class-room').then(m => m.LiveClassRoom),
  canActivate: [authGuard]
},
    {
  path: 'instructors',
  loadComponent: () => import('./base/instructors/instructors').then(m => m.Instructors),
},
{
  path: 'store',
  loadComponent: () => import('./base/store/store').then(m => m.Store),
},
{path: 'free-class', component: FreeClass, canActivate: [authGuard]},
    { path: 'leaderboard', component: Leaderboard },
    { path: '**', redirectTo: 'homepage' },
];