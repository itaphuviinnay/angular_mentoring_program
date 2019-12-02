import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss']
})
export class CourseDateComponent implements OnInit {
  date: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.date = this.formGroupDirective.control.get('date') as FormControl;
  }
}
