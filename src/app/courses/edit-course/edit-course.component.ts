import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import {
  GetCourseDetails,
  EditCourse
} from 'src/app/store/actions/courses.actions';
import { courseDetailsSelector } from 'src/app/store/selectors/courses';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  courseForm: FormGroup;
  name: FormControl;
  description: FormControl;
  length: FormControl;
  date: FormControl;
  authors: FormControl;
  courseId: number;
  course: Course;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.courseId = +id;
    });
    this.store.dispatch(new GetCourseDetails(this.courseId));
    this.courseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      length: new FormControl(0, Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl([], Validators.required)
    });
    this.store
      .select(courseDetailsSelector(this.courseId))
      .subscribe(course => {
        if (course) {
          this.course = course;
          this.courseForm.patchValue({
            name: course.name,
            description: course.description,
            length: course.length,
            date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
            authors: course.authors
          });
        }
      });
  }

  submitCourse() {
    const formValue = this.courseForm.value;
    const newCourse: Course = {
      ...formValue,
      id: this.courseId,
      isTopRated: this.course.isTopRated
    };
    this.store.dispatch(new EditCourse(newCourse));
  }

  cancel() {
    if (!this.courseForm.dirty) {
      this.router.navigate(['/courses']);
      return;
    }
    if (confirm('Do you really want to cancel course creation?')) {
      this.router.navigate(['/courses']);
    }
  }
}
