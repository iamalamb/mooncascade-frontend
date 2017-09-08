import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
    selector: 'app-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

    // Observable list of of Notifications stored in Redux
    @select(['notifications']) notifications$;

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
