import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseComponent } from '../course/course.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { SectionComponent } from '../section/section.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { CustomBorderDirective } from '../shared/directives/custom-border.directive';
import { CourseDurationPipe } from '../shared/pipes/course-duration';
import { CourseOrderByPipe } from '../shared/pipes/course-order';
import { CourseFilterPipe } from '../shared/pipes/course-filter';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, CoursesRoutingModule],
  declarations: [
    CoursesComponent,
    AddCourseComponent,
    CourseListComponent,
    CourseComponent,
    BreadcrumbComponent,
    SearchCourseComponent,
    SectionComponent,
    LoadMoreComponent,
    CustomBorderDirective,
    CourseDurationPipe,
    CourseOrderByPipe
  ],
  providers: [CourseFilterPipe]
})
export class CoursesModule {}
