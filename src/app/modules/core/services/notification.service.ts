import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../../models/iapp-state';
import {Notification} from '../../../models/notification';
import {AppActions} from '../../../app.actions';

@Injectable()
export class NotificationService {

    constructor(private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    }

    public add(type: string, title: string, message: string): void {

        // Generate the notification
        const notification: Notification = {
            type: type,
            title: title,
            message: message
        };

        // Dispatch to redux
        this.ngRedux.dispatch(this.actions.notificationAdd(notification));
    }

    public deleteAll(): void {
        this.ngRedux.dispatch(this.actions.notificationDeleteAll());
    }
}
