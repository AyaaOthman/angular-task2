import {
  Component,
  Input,
  Injectable,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}
  searchValue!: string;
  reciveSearchEmail(searchValue: string) {
    console.log(searchValue);
    this.searchValue = searchValue;
  }
}
