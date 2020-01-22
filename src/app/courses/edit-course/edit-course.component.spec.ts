import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseComponent } from './edit-course.component';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseAuthorsPipe } from 'src/app/shared/pipes/course-authors';
import { provideMockStore } from '@ngrx/store/testing';
import { initialUserState } from 'src/app/store/state/user.state';
import { initialCoursesState } from 'src/app/store/state/courses.state';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [EditCourseComponent],
      providers: [
        CoursesService,
        DatePipe,
        CourseAuthorsPipe,
        provideMockStore({
          initialState: {
            user: initialUserState,
            courses: initialCoursesState
          }
        })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    const formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      authors: new FormControl([], Validators.required)
    });
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    component.courseForm = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
