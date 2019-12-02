import { Injectable, OnInit } from '@angular/core';
import { courses } from './courses.mock';
import { Course } from 'src/app/models/course';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses$ = new BehaviorSubject<Course[]>(courses);

  getAllCourses(): Course[] {
    return this.courses$.value;
  }

  getCourseById(courseId: number) {
    console.log(`Course details for id: ${courseId}`);
  }

  createCourse(course: Course) {
    console.log('Creating new course');
    const updatedCourses = [...courses, course];
    this.courses$.next(updatedCourses);
  }

  updateCourse(course: Partial<Course>) {
    console.log(`Updating course with id: ${course.id}`);
  }

  deleteCourse(courseId: number) {
    const updatedCourses = this.courses$.value.filter(
      course => course.id !== courseId
    );
    this.courses$.next(updatedCourses);
    console.log(`Course with id: ${courseId} is deleted`);
  }
}
