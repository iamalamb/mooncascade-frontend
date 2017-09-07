import {Injectable} from '@angular/core';
import {AnyAction} from 'redux';
import {Notification} from './models/notification';
import {Athlete} from './models/athlete';

@Injectable()
export class AppActions {

    // Notification actions
    static NOTIFICATION_ADD = 'NOTIFICATION_ADD';
    static NOTIFICATION_DELETE_ALL = 'NOTIFICATION_DELETE_ALL';

    // Athlete actions
    static ATHLETE_INFO_RECEIVED = 'ATHLETE_INFO_RECEIVED';

    notificationAdd(notification: Notification): AnyAction {
        return {type: AppActions.NOTIFICATION_ADD, payload: notification};
    }

    notificationDeleteAll(): AnyAction {
        return {type: AppActions.NOTIFICATION_DELETE_ALL};
    }

    athleteInfoReceieved(athlete: Athlete): AnyAction {
        return {type: AppActions.ATHLETE_INFO_RECEIVED, payload: athlete};
    }
}