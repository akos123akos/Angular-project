import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseFormComponent } from '@app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses/add',
    component: CourseFormComponent,
  },
  {
    path: 'courses/edit/:id',
    component: CourseFormComponent,
  }
];


@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
