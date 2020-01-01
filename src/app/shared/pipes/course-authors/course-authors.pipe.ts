import { Pipe, PipeTransform } from '@angular/core';
import { CourseAuthor } from 'src/app/models/course';

@Pipe({
  name: 'courseAuthors'
})
export class CourseAuthorsPipe implements PipeTransform {
  transform(courseAuthors: CourseAuthor[]): string {
    const authors = courseAuthors.map(
      author => `${author.name} ${author.lastName || ''}`
    );
    return authors.join(', ');
  }
}
