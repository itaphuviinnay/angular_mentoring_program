import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../urls/urls';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import {
  totalCoursesCountSelector,
  loadedCoursesCountSelector
} from 'src/app/store/selectors/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(URLS.ALL_COURSES);
  }

  getCourses(): Observable<Course[]> {
    return this.store.select(loadedCoursesCountSelector).pipe(
      switchMap(coursesLoadedCount => {
        return this.http.get<Course[]>(
          URLS.COURSES_PAGING(0, coursesLoadedCount)
        );
      })
    );
  }

  loadMoreCourses(): Observable<Course[]> {
    return this.getCourses();
  }

  searchCourses(searchText: string): Observable<Course[]> {
    if (searchText) {
      return this.http.get<Course[]>(URLS.COURSES_SEARCH(searchText));
    }
    return this.getCourses();
  }

  getTotalCoursesCount(): Observable<number> {
    return this.store.select(totalCoursesCountSelector);
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
