import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllCourses } from '../store/actions/courses.actions';
import { CoursesState } from '../store/state/courses.state';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(private store: Store<CoursesState>) {}

  ngOnInit() {
    this.store.dispatch(new GetAllCourses());
  }
}
