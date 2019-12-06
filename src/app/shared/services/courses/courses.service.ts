import { Injectable, OnInit } from '@angular/core';
import { courses } from './courses.mock';
import { Course } from 'src/app/models/course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private allCourses = courses;
  courses$ = new BehaviorSubject<Course[]>(this.allCourses);

  getAllCourses(): Course[] {
    return this.courses$.value;
  }

  getCourseById(courseId: number) {
    return this.getAllCourses().find(c => c.id === courseId);
  }

  createCourse(course: Course) {
    this.allCourses = [...this.allCourses, course];
    this.courses$.next(this.allCourses);
  }

  updateCourse(updatedCourse: Course) {
    this.allCourses = this.allCourses.map(course =>
      course.id === updatedCourse.id ? updatedCourse : course
    );
    this.courses$.next(this.allCourses);
  }

  deleteCourse(courseId: number) {
    const updatedCourses = this.courses$.value.filter(
      course => course.id !== courseId
    );
    this.courses$.next(updatedCourses);
  }
}
