import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.showLoading$.subscribe(
      showLoading => (this.showLoader = showLoading)
    );
  }
}
