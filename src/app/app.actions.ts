import {Injectable} from '@angular/core';
import {Action, AnyAction} from 'redux';
import {Notification} from './models/notification';
import {Langage} from './models/langage';

@Injectable()
export class AppActions {

    // Language/Locale actions
    static LANGUAGE_INIT = 'LANGUAGE_INIT';
    static LANGUAGE_SWITCHED = 'LANGUAGE_SWITCHED';

    // Notification actions
    static NOTIFICATION_ADD = 'NOTIFICATION_ADD';
    static NOTIFICATION_DELETE_ALL = 'NOTIFICATION_DELETE_ALL';

    // Generic event specific actions
    static EVENT_DELAYED = 'EVENT_DELAYED';
    static EVENT_STARTED = 'EVENT_STARTED';
    static EVENT_FINISHED = 'EVENT_FINISHED';

    // Athlete actions
    static ATHLETE_INFO_RECEIVED = 'ATHLETE_INFO_RECEIVED';

    languageInit(languages: Langage[]): AnyAction {
        return {type: AppActions.LANGUAGE_INIT, payload: languages};
    }

    languageSwitched(language: Langage): AnyAction {
        return {type: AppActions.LANGUAGE_SWITCHED, payload: language};
    }

    notificationAdd(notification: Notification): AnyAction {
        return {type: AppActions.NOTIFICATION_ADD, payload: notification};
    }

    notificationDeleteAll(): AnyAction {
        return {type: AppActions.NOTIFICATION_DELETE_ALL};
    }

    eventDelayed(): Action {
        return {type: AppActions.EVENT_DELAYED};
    }

    eventStarted(): Action {
        return {type: AppActions.EVENT_STARTED};
    }

    eventFinished(): Action {
        return {type: AppActions.EVENT_FINISHED};
    }

    athleteInfoReceieved(): Action {
        return {type: AppActions.ATHLETE_INFO_RECEIVED};
    }
}