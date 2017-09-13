import {Injectable} from '@angular/core';
import {AnyAction} from 'redux';
import {Notification} from './models/notification';
import {Athlete} from './models/athlete';

@Injectable()
export class AppActions {

    // Notification actions
    static NOTIFICATION_ADD = 'NOTIFICATION_ADD';
    static NOTIFICATION_DELETE_ALL = 'NOTIFICATION_DELETE_ALL';
    static NOTIFICATION_DELETE_ITEM = 'NOTIFICATION_DELETE_ITEM';

    // Event actions
    static EVENT_REGISTERED = 'EVENT_REGISTERED';
    static EVENT_STARTED = 'EVENT_STARTED';
    static EVENT_COMPLETED = 'EVENT_COMPLETED';

    // Athlete actions
    static ATHLETE_INFO_RECEIVED = 'ATHLETE_INFO_RECEIVED';

    notificationAdd(notification: Notification): AnyAction {
        return {type: AppActions.NOTIFICATION_ADD, payload: notification};
    }

    notificationDeleteAll(): AnyAction {
        return {type: AppActions.NOTIFICATION_DELETE_ALL};
    }

    notificationDeleteItem(id: string): AnyAction {
        return {type: AppActions.NOTIFICATION_DELETE_ITEM, payload: id};
    }

    eventRegistered(): AnyAction {
        return {type: AppActions.EVENT_REGISTERED};
    }

    eventStarted(): AnyAction {
        return {type: AppActions.EVENT_STARTED};
    }

    eventCompleted(): AnyAction {
        return {type: AppActions.EVENT_COMPLETED};
    }

    athleteInfoReceieved(athlete: Athlete): AnyAction {
        return {type: AppActions.ATHLETE_INFO_RECEIVED, payload: athlete};
    }
}