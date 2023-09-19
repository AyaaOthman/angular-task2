import { UpperCasePipe } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Output() sendUserName = new EventEmitter<string>();
  userName: string;
  @Input() user!: any;
  faStar = faStar;
  constructor() {}
  ngOnInit(): void {}

  btnName: string = 'Activate';
  activeToggle() {
    if (this.btnName == 'Activate') {
      this.user.is_active = true;
      this.btnName = 'Deactivate';
      this.userName = this.user.username;
      this.sendUserName.emit(this.userName);
    } else {
      this.user.is_active = false;
      this.btnName = 'Activate';
    }
  }
  removeActivation() {
    this.user.is_active = false;
    this.btnName = 'Activate';
    this.userName = ' ';
    this.sendUserName.emit(this.userName);
  }
}
