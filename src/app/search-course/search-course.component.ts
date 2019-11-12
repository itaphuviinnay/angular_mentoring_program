import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  @Output() courseSearch = new EventEmitter<string>();
  searchInput: string = '';

  constructor() { }

  ngOnInit() {
  }

  onCourseSearch() {
    this.courseSearch.emit(this.searchInput.trim());
  }

}
