import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
  transform(courseDuration: number): string {
    if (courseDuration < 60) {
      return `${courseDuration} min`;
    }
    if (courseDuration === 60) {
      return `${courseDuration / 60} h`;
    }
    return `${(courseDuration / 60).toFixed()} h ${courseDuration % 60} min`;
  }
}
