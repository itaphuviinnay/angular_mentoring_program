import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]>;
  allCoursesLoaded$: Observable<boolean>;
  isDataEmpty$: Observable<boolean>;

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    this.courses$ = this.coursesService.getCourses();
    this.isDataEmpty$ = this.courses$.pipe(
      map(courses => courses.length === 0)
    );
  }

  onCourseSearch(searchInput: string) {
    this.allCoursesLoaded$ = searchInput ? of(true) : of(false);
    this.courses$ = this.coursesService.searchCourses(searchInput);
    this.isDataEmpty$ = this.courses$.pipe(
      map(courses => courses.length === 0)
    );
  }

  onLoadMoreCourses() {
    this.courses$ = this.coursesService.loadMoreCourses();
    this.allCoursesLoaded$ = this.courses$.pipe(
      map(
        courses => courses.length >= this.coursesService.getTotalCoursesCount()
      )
    );
  }

  addNewCourse() {
    this.router.navigateByUrl('/courses/new');
  }

  onEditCourse(courseId: number) {
    this.router.navigateByUrl(`/courses/${courseId}`);
  }

  onDeleteCourse(courseId: number) {
    this.coursesService
      .deleteCourse(courseId)
      .subscribe(_ => (this.courses$ = this.coursesService.getCourses()));
  }

  trackCourses(index: number, course: Course): number {
    if (!course) {
      return null;
    }
    return course.id;
  }

  ngOnDestroy() {
    this.coursesService.resetCoursesLoadedCount();
  }
}
