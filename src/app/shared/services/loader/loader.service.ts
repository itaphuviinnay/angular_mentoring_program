import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showLoading$: Subject<boolean> = new Subject();

  setLoadingStatus(status: boolean) {
    this.showLoading$.next(status);
  }
}
