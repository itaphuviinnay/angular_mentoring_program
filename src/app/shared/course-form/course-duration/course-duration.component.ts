import { Component, OnInit, forwardRef } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    }
  ]
})
export class CourseDurationComponent implements OnInit {
  duration: FormControl;
  value: number;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.duration = this.formGroupDirective.control.get(
      'length'
    ) as FormControl;
  }

  writeValue(value: number): void {
    this.value = value ? value : 0;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
