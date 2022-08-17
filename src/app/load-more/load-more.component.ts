import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  @Input() allCoursesLoaded: boolean;
  @Output() loadMoreCourses = new EventEmitter();

  constructor() {}

  loadMore() {
    this.loadMoreCourses.emit();
  }
}
