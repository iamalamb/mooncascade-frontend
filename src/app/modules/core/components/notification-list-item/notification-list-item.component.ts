import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../../../models/notification';

@Component({
    selector: 'app-notification-list-item',
    templateUrl: './notification-list-item.component.html',
    styleUrls: ['./notification-list-item.component.scss']
})
export class NotificationListItemComponent implements OnInit {

    @Input() notification: Notification;

    constructor() {
    }

    ngOnInit() {
    }

}
