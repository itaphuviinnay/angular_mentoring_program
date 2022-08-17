import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./add-course/add-course.module').then(m => m.AddCourseModule)
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./edit-course/edit-course.module').then(
            m => m.EditCourseModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
