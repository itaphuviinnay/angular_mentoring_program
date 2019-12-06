import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { SectionComponent } from '../section/section.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { CustomBorderDirective } from '../shared/directives/custom-border.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses.routing.module';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    SharedPipesModule
  ],
  declarations: [
    BreadcrumbComponent,
    CoursesComponent,
    CourseListComponent,
    CourseComponent,
    SearchCourseComponent,
    SectionComponent,
    LoadMoreComponent,
    CustomBorderDirective
  ]
})
export class CoursesModule {}
