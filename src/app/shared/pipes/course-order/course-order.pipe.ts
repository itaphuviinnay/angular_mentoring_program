import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({
  name: 'courseOrderBy'
})
export class CourseOrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    if (!courses) {
      return [];
    }
    return courses.sort((course1, course2) => {
      if (course1.date < course2.date) {
        return 1;
      }
      return -1;
    });
  }
}
