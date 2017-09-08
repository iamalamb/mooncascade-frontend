import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notification} from '../../../../models/notification';

@Component({
    selector: 'app-notification-list-item',
    templateUrl: './notification-list-item.component.html',
    styleUrls: ['./notification-list-item.component.scss']
})
export class NotificationListItemComponent implements OnInit {

    // The notification to display
    @Input() notification: Notification;

    // Event to dispatch when notification is closed
    @Output() closeNotificationEvent: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    // Handle the clicking of a notification close icon
    handleOnClose(id: string): void {
        this.closeNotificationEvent.emit(id);
    }
}
