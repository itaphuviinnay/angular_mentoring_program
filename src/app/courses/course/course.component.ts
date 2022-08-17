import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() editCourse = new EventEmitter<number>();
  @Output() deleteCourse = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onCourseEdit() {
    this.editCourse.emit(this.course.id);
  }

  onCourseDelete() {
    if (confirm('Do you really want to delete this course')) {
      this.deleteCourse.emit(this.course.id);
    }
  }
}
