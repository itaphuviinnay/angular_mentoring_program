import { NgModule } from '@angular/core';
import { CourseDurationPipe } from './course-duration';
import { CourseFilterPipe } from './course-filter';
import { CourseOrderByPipe } from './course-order';
import { CourseAuthorsPipe } from './course-authors';

@NgModule({
  declarations: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ],
  providers: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ],
  exports: [
    CourseDurationPipe,
    CourseFilterPipe,
    CourseOrderByPipe,
    CourseAuthorsPipe
  ]
})
export class SharedPipesModule {}
