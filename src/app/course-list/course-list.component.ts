import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() courses: Course[];
  isDataEmpty: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.isDataEmpty = this.courses.length === 0;
  }

  onEditCourse(courseId: number) {
    console.log('Edit Course Id', courseId);
  }

  onDeleteCourse(courseId: number) {
    console.log('Delete Course Id', courseId);
  }

}
