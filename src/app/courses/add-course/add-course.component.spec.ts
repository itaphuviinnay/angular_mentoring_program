import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
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
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [AddCourseComponent],
      providers: [CoursesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    const formGroup = new FormGroup({
      title: new FormControl('Angular', Validators.required),
      description: new FormControl('Some description', Validators.required),
      duration: new FormControl(120, Validators.required),
      creationDate: new FormControl('03/03/1990', Validators.required),
      authors: new FormControl(['Vinay'], Validators.required)
    });
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    component.newCourseForm = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
