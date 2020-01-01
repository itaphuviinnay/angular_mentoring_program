import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../models/course';
import { CoursesService } from '../../shared/services/courses/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  newCourseForm: FormGroup;
  title: FormControl;
  description: FormControl;
  duration: FormControl;
  date: FormControl;
  authors: FormControl;

  constructor(private router: Router, private courseService: CoursesService) {}

  ngOnInit() {
    this.title = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);
    this.authors = new FormControl([], Validators.required);
    this.newCourseForm = new FormGroup({
      name: this.title,
      description: this.description,
      length: this.duration,
      date: this.date,
      authors: this.authors
    });
  }

  createCourse() {
    const formValue = this.newCourseForm.value;
    const newCourse: Course = {
      ...formValue,
      id: this.courseService.getTotalCoursesCount() + 1,
      authors: this.transformCourseAuthors(formValue.authors),
      isTopRated: true
    };
    this.courseService
      .createCourse(newCourse)
      .subscribe(_ => this.router.navigate(['/courses']));
  }

  transformCourseAuthors(authors: string) {
    return authors.split(',').map((author: string, index: number) => {
      return {
        id: index + 1,
        name: author.trim()
      };
    });
  }

  cancelCourseCreation() {
    if (!this.newCourseForm.dirty) {
      this.router.navigate(['/courses']);
      return;
    }
    if (confirm('Do you really want to cancel course creation?')) {
      this.router.navigate(['/courses']);
    }
  }
}
