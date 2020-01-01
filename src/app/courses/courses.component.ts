import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe();
  }
}
