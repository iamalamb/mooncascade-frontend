import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../../../models/iapp-state';
import {AppActions} from '../../../../app.actions';

@Component({
    selector: 'app-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

    // Observable list of of Notifications stored in Redux
    @select(['notifications']) notifications$;

    constructor(private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    }

    ngOnInit() {
    }

    // Handle the clicking of a notification close icon
    handleOnClose(id: string): void {
        this.ngRedux.dispatch(this.actions.notificationDeleteItem(id));
    }
}
