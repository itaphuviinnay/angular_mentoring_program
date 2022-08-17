import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { Router } from '@angular/router';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import {
  GetCourses,
  SearchCourses,
  LoadMoreCourses,
  DeleteCourse
} from 'src/app/store/actions/courses.actions';
import {
  coursesSelector,
  totalCoursesCountSelector
} from 'src/app/store/selectors/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  allCoursesLoaded$: Observable<boolean>;
  isDataEmpty$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetCourses());
    this.courses$ = this.store.select(coursesSelector);
    this.isDataEmpty$ = this.courses$.pipe(
      map(courses => courses.length === 0)
    );
  }

  onCourseSearch(searchInput: string) {
    this.allCoursesLoaded$ = searchInput ? of(true) : of(false);
    this.store.dispatch(new SearchCourses(searchInput));
  }

  onLoadMoreCourses() {
    this.store.dispatch(new LoadMoreCourses());
    this.allCoursesLoaded$ = combineLatest([
      this.courses$,
      this.store.select(totalCoursesCountSelector)
    ]).pipe(
      map(([courses, totalCoursesCount]) => {
        return courses.length >= totalCoursesCount;
      })
    );
  }

  addNewCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  onDeleteCourse(courseId: number) {
    this.store.dispatch(new DeleteCourse(courseId));
  }

  trackCourses(index: number, course: Course): number {
    if (!course) {
      return null;
    }
    return course.id;
  }
}
