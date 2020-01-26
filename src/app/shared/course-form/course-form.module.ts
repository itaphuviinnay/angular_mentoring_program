import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ],
  exports: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ]
})
export class CourseFormModule {}
