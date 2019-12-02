import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseAuthors'
})
export class CourseAuthorsPipe implements PipeTransform {
  transform(courseAuthors: string[]): string {
    return courseAuthors.join(', ');
  }
}
