import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { RouterModule } from '@angular/router';
import { CourseFormModule } from 'src/app/shared/course-form/course-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseFormModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditCourseComponent
      }
    ])
  ],
  declarations: [EditCourseComponent],
  providers: [DatePipe]
})
export class EditCourseModule {}
