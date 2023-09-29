import { Component, OnInit } from '@angular/core';
// import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
