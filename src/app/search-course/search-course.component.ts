import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  searchControl: FormControl;
  @Output() courseSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.subscribe((searchInput: string) =>
      this.courseSearch.emit(searchInput)
    );
  }
}
