import { ReplaySubject } from 'rxjs/ReplaySubject';

export class SelectedItemService {
public _selectedItem = new ReplaySubject<JSON>(1); // buffer size 1

  selectedItem$ = this._selectedItem.asObservable();
  set selectedItem(item: JSON) {
    this._selectedItem.next(item);
  }
}