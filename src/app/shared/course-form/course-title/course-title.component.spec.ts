import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTitleComponent } from './course-title.component';
import {
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
  FormControl
} from '@angular/forms';

describe('CourseTitleComponent', () => {
  let component: CourseTitleComponent;
  let fixture: ComponentFixture<CourseTitleComponent>;
  let formGroup: FormGroup;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async(() => {
    formGroup = new FormGroup({
      name: new FormControl('')
    });
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CourseTitleComponent],
      providers: [
        {
          provide: FormGroupDirective,
          useValue: formGroupDirective
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
