import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { Course } from '../models/course';
import { By } from '@angular/platform-browser';

const course: Course = {
  id: 1,
  title: 'Angular Global Mentoring Program [2019Q3 IN]',
  description: `Angular – is one of the most famous and fast-growing frameworks in our days. It's extremely modular, lightweight, and easy to learn`,
  duration: 60,
  creationDate: new Date()
};

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
      .compileComponents();
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
    let button = fixture.debugElement.query(By.css('.edit-btn'));
    button.triggerEventHandler('click', null);
    expect(spyOnEdit).toHaveBeenCalled();
  }));

  it('should call onCourseDelete when course delete button is clicked', fakeAsync(() => {
    const spyOnDelete = spyOn(component, 'onCourseDelete');
    let button = fixture.debugElement.query(By.css('.delete-btn'));
    button.triggerEventHandler('click', null);
    expect(spyOnDelete).toHaveBeenCalled();
  }));
});
