import { NgModule } from '@angular/core';
//routing
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { RegistrationFormComponent } from './shared/components/registration-form/registration-form.component';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { AdminGuard } from './user/guards/admin.guard';


export const routes: Routes = [
    { 
        path: 'login',
        component: LoginFormComponent,
        canActivate: [NotAuthorizedGuard]
    },
    { 
        path: 'registration',
        component: RegistrationFormComponent,
        canActivate: [NotAuthorizedGuard]
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses-list/courses-list.module').then(m => m.CoursesListModule),
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses/:id',
        loadChildren: () => import('./features/course-info/course-info.module').then(m => m.CourseInfoModule),
        canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses/add',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
        canLoad: [AuthorizedGuard],
        canActivate: [AdminGuard]
    },
    {
        path: 'courses/edit/:id',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
        canLoad: [AuthorizedGuard],
        canActivate: [AdminGuard]
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'courses',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}