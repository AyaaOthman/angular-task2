import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  data: any;
  @Input() searchedEmail!: string;
  @Input() userName!: string;
  reciveUserName(userName: string) {
    this.userName = userName;
    console.log('parent', this.userName);
  }
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const url: string = '../../assets/users.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
    });
  }
}
