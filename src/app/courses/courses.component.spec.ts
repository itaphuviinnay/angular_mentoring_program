import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseFilterPipe } from '../shared/pipes/course-filter';
import { CoursesService } from '../shared/services/courses/courses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialUserState } from '../store/state/user.state';
import { initialCoursesState } from '../store/state/courses.state';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CoursesComponent],
      providers: [
        CourseFilterPipe,
        CoursesService,
        provideMockStore({
          initialState: {
            user: initialUserState,
            courses: initialCoursesState
          }
        })
      ],
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
