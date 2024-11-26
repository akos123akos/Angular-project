import { NgModule } from '@angular/core';
//routing
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { FallbackComponent } from './shared/components/fallback/fallback.component';
import { RegistrationFormComponent } from './shared/components/registration-form/registration-form.component';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseFormComponent } from './shared/components';
import { CourseInfoComponent } from './features/course-info/course-info.component';
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
        component: CoursesListComponent,
        canActivate: [AuthorizedGuard],
    },
    {
        path: 'courses/add',
        component: CourseFormComponent,
        canActivate: [AuthorizedGuard, AdminGuard]
    },
    {
        path: 'courses/:id',
        component: CourseInfoComponent,
        canActivate: [AuthorizedGuard],
    },
    {
        path: 'courses/edit/:id',
        component: CourseFormComponent,
        canActivate: [AdminGuard, AuthorizedGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: FallbackComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}