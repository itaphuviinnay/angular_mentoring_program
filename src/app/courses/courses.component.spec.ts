import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseFilterPipe } from '../shared/pipes/course-filter';
import { CoursesService } from '../shared/services/courses/courses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoursesComponent],
      providers: [CourseFilterPipe, CoursesService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
