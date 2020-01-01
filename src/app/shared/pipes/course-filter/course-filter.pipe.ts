import { PipeTransform, Pipe } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {
  transform(searchInput: string, courses: Course[]) {
    return courses.filter(course =>
      course.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
}
