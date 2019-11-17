import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../shared/services/courses/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnChanges {
  @Input() courses: Course[];
  isDataEmpty: boolean;

  constructor(public coursesService: CoursesService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.isDataEmpty = this.courses.length === 0;
  }

  onEditCourse(courseId: number) {
    console.log('Edit Course Id', courseId);
  }

  onDeleteCourse(courseId: number) {
    this.coursesService.deleteCourse(courseId);
  }
}
