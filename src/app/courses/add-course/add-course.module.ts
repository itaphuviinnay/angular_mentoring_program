import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { RouterModule } from '@angular/router';
import { CourseFormModule } from 'src/app/shared/course-form/course-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CourseFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddCourseComponent
      }
    ])
  ],
  declarations: [AddCourseComponent]
})
export class AddCourseModule {}
