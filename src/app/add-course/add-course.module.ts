import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course.component';
import { RouterModule } from '@angular/router';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddCourseComponent
      }
    ])
  ],
  declarations: [
    AddCourseComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent
  ]
})
export class AddCourseModule {}
