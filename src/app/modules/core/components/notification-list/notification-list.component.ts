import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
    selector: 'app-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

    // Select a list of notications from redux
    @select(['notifications']) notifications$;

    constructor() {
    }

    ngOnInit() {
    }

}
