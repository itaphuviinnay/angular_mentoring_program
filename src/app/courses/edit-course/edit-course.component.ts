import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { DatePipe } from '@angular/common';
import { CourseAuthorsPipe } from 'src/app/shared/pipes/course-authors';

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
    private courseService: CoursesService,
    private datePipe: DatePipe,
    private courseAuthorsPipe: CourseAuthorsPipe
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.courseId = +id;
    });
    this.courseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      length: new FormControl(0, Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl([], Validators.required)
    });
    this.courseService.getCourseById(this.courseId).subscribe(course => {
      if (course) {
        this.course = course;
        this.courseForm.patchValue({
          name: course.name,
          description: course.description,
          length: course.length,
          date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
          authors: this.courseAuthorsPipe.transform(course.authors)
        });
      }
    });
  }

  submitCourse() {
    const formValue = this.courseForm.value;
    const newCourse: Course = {
      ...formValue,
      id: this.courseId,
      authors: this.transformCourseAuthors(formValue.authors),
      isTopRated: this.course.isTopRated
    };
    this.courseService
      .updateCourse(newCourse)
      .subscribe(_ => this.router.navigate(['/courses']));
  }

  transformCourseAuthors(authors: string) {
    return authors.split(',').map((authorName: string, index: number) => {
      const courseAuthor = this.course.authors.find(author => {
        const name = `${author.name} ${author.lastName}`;
        return name === authorName;
      });
      return {
        id: courseAuthor ? courseAuthor.id : index + 1,
        name: authorName.trim()
      };
    });
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
