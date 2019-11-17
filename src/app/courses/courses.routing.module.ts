import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Route[] = [
  {
    path: '',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CoursesRoutingModule {}
