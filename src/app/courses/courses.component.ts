import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { CourseFilterPipe } from '../shared/pipes/course-filter';
import { CoursesService } from '../shared/services/courses/courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  allCourses: Course[];
  courseList: Course[];
  courseSubscription: Subscription;

  constructor(
    private courseFilterPipe: CourseFilterPipe,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courseSubscription = this.coursesService.courses$.subscribe(_ => {
      this.allCourses = this.coursesService.getAllCourses();
      this.courseList = this.allCourses.slice();
    });
  }

  onCourseSearch(searchInput: string) {
    this.courseList = this.courseFilterPipe.transform(
      searchInput,
      this.allCourses
    );
  }

  ngOnDestroy() {
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
  }
}
