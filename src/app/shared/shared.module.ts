import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent
} from "./components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DurationPipe } from './pipes/duration.pipe';
import { AuthorNamePipe } from './pipes/authorNames.pipe';
import { EmailValidatorDirective } from '@shared/directives/email.directive';
import { FallbackComponent } from './components/fallback/fallback.component';
// import { TogglePasswordDirective } from '@shared/directives/toggle-password.directive';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  FallbackComponent
];

const pipes = [
  DurationPipe,
  AuthorNamePipe
]

const directives = [
  EmailValidatorDirective,
  /* TogglePasswordDirective */
]

@NgModule({
  declarations: [...components, ...pipes, ...directives],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...components, ...pipes, ...directives]
})
export class SharedModule { }
