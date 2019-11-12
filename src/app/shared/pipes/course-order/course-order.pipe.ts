import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({
  name: 'courseOrderBy'
})
export class CourseOrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    return courses.sort((course1, course2) => {
      if (course1.creationDate < course2.creationDate) {
        return 1;
      }
      return -1;
    });
  }
}
