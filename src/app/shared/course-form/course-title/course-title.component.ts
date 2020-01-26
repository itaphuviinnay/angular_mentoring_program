import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.scss']
})
export class CourseTitleComponent implements OnInit {
  title: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.title = this.formGroupDirective.control.get(
      'name'
    ) as FormControl;
  }
}
