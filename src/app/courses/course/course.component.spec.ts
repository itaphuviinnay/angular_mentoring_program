import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { Course } from '../../models/course';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomBorderDirective } from '../../shared/directives/custom-border.directive';
import { CourseDurationPipe } from '../../shared/pipes/course-duration';
import { CourseAuthorsPipe } from '../../shared/pipes/course-authors';

const course: Course = {
  id: 1,
  name: 'Angular Global Mentoring Program [2019Q3 IN]',
  description: `Angular – is one of the most famous and fast-growing frameworks in our days. It's extremely modular, lightweight, and easy to learn`,
  length: 60,
  date: new Date(),
  authors: [
    { id: 1, name: 'Vinay', lastName: 'Itapu' },
    { id: 2, name: 'EPAM', lastName: 'Systems' }
  ],
  isTopRated: false
};

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        CustomBorderDirective,
        CourseDurationPipe,
        CourseAuthorsPipe
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onCourseEdit when course edit button is clicked', fakeAsync(() => {
    const spyOnEdit = spyOn(component, 'onCourseEdit');
    const button = fixture.debugElement.query(By.css('.edit-btn'));
    button.triggerEventHandler('click', null);
    expect(spyOnEdit).toHaveBeenCalled();
  }));

  it('should call onCourseDelete when course delete button is clicked', fakeAsync(() => {
    const spyOnDelete = spyOn(component, 'onCourseDelete');
    const button = fixture.debugElement.query(By.css('.delete-btn'));
    button.triggerEventHandler('click', null);
    expect(spyOnDelete).toHaveBeenCalled();
  }));
});
