import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  btnName: string = 'Search';
  @Output() sendSearchEmail = new EventEmitter<string>();
  searchUsers(x: string) {
    this.sendSearchEmail.emit(x);
    if (this.btnName === 'Search' && this.searchValue) {
      this.btnName = 'Reset';
    } else {
      this.btnName = 'Search';
    }
    this.searchValue = '';
  }
}
