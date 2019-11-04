import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console log the course id while editing', () => {
    spyOn(console, 'log');
    component.onEditCourse(1);
    expect(console.log).toHaveBeenCalled();
  });

  it('should console log the course id while deleting', () => {
    spyOn(console, 'log');
    component.onDeleteCourse(1);
    expect(console.log).toHaveBeenCalled();
  });
});
