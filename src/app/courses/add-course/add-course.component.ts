import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../models/course';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { totalCoursesCountSelector } from 'src/app/store/selectors/courses';
import { CreateCourse } from 'src/app/store/actions/courses.actions';

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

  constructor(private router: Router, private store: Store<AppState>) {}

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
    this.store.select(totalCoursesCountSelector).subscribe(totalCourseCount => {
      const newCourse: Course = {
        ...formValue,
        id: totalCourseCount + 1,
        isTopRated: true
      };
      this.store.dispatch(new CreateCourse(newCourse));
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
