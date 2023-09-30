import { Component, OnInit } from '@angular/core';
import { notification } from 'app/model/notification.model';
import { NotificationService } from 'app/service/notification.service';

declare var $: any;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications!: Notification[];

  selectedNotification!: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.fetchNotificationData().subscribe((data: Notification[]) => {
      this.notifications = data;
    });

  };


  showNotification(from, align) {
    const type = ['', 'info', 'success', 'warning', 'danger'];

    var color = Math.floor((Math.random() * 4) + 1);
    $.notify({
      icon: "pe-7s-gift",
      message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
    }, {
      type: type[color],
      timer: 1000,
      placement: {
        from: from,
        align: align
      }
    });
  }
}
