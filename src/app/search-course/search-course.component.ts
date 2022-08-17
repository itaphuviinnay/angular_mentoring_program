import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, filter } from 'rxjs/operators';
import { timer } from 'rxjs';

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
    this.searchControl.valueChanges
      .pipe(
        filter(
          (searchText: string) =>
            searchText.length === 0 || searchText.length > 2
        ),
        debounce(() => timer(500))
      )
      .subscribe((searchInput: string) =>
        this.courseSearch.emit(searchInput.trim())
      );
  }
}
