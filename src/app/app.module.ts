import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { SectionComponent } from './section/section.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AddCourseComponent,
    CourseListComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SearchCourseComponent,
    SectionComponent,
    LoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
