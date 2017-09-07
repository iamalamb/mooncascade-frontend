import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../../models/iapp-state';
import {Notification} from '../../../models/notification';
import {AppActions} from '../../../app.actions';
import {UUID} from 'angular2-uuid';

@Injectable()
export class NotificationService {

    constructor(private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    }

    public add(type: string, title: string, message: string): Notification {

        this.deleteAll();

        const id: string = UUID.UUID();

        // Generate the notification
        const notification: Notification = {
            id: id,
            type: type,
            title: title,
            message: message
        };

        // Dispatch to redux
        this.ngRedux.dispatch(this.actions.notificationAdd(notification));

        // Return the notification
        return notification;
    }

    public deleteAll(): void {
        this.ngRedux.dispatch(this.actions.notificationDeleteAll());
    }
}
