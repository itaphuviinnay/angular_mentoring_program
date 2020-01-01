import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../urls/urls';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesLoadedCount = 5;
  private totalCoursesCount = 0;

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(URLS.ALL_COURSES)
      .pipe(tap(courses => (this.totalCoursesCount = courses.length)));
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      URLS.COURSES_PAGING(0, this.coursesLoadedCount)
    );
  }

  loadMoreCourses(): Observable<Course[]> {
    this.coursesLoadedCount += 5;
    return this.getCourses();
  }

  searchCourses(searchText: string): Observable<Course[]> {
    if (searchText) {
      return this.http.get<Course[]>(URLS.COURSES_SEARCH(searchText));
    }
    return this.getCourses();
  }

  getTotalCoursesCount() {
    return this.totalCoursesCount;
  }

  resetCoursesLoadedCount() {
    this.coursesLoadedCount = 5;
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(URLS.GET_COURSE_INFO(courseId));
  }

  createCourse(course: Course) {
    return this.http.post(URLS.CREATE_COURSE, course);
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch(URLS.EDIT_COURSE(updatedCourse.id), updatedCourse);
  }

  deleteCourse(courseId: number) {
    return this.http.delete(URLS.DELETE_COURSE(courseId));
  }
}
