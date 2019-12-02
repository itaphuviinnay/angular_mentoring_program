import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../shared/services/courses/courses.service';
import { CourseFilterPipe } from '../shared/pipes/course-filter';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {
  allCourses: Course[];
  courseList: Course[];
  courseSubscription: Subscription;
  isDataEmpty: boolean;

  constructor(
    private courseFilterPipe: CourseFilterPipe,
    private coursesService: CoursesService,
    private router: Router
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

  addNewCourse() {
    this.router.navigateByUrl('/courses/add-course');
  }

  ngOnDestroy() {
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
  }

  onEditCourse(courseId: number) {
    console.log('Edit Course Id', courseId);
  }

  onDeleteCourse(courseId: number) {
    this.coursesService.deleteCourse(courseId);
  }

  trackCourses(index: number, course: Course): number {
    if (!course) {
      return null;
    }
    return course.id;
  }
}
