import {Injectable} from '@angular/core';
import {Action} from 'redux';

@Injectable()
export class AppActions {
    // Generic event specific actions
    static EVENT_DELAYED = 'EVENT_DELAYED';
    static EVENT_STARTED = 'EVENT_STARTED';
    static EVENT_FINISHED = 'EVENT_FINISHED';

    // Athlete actions
    static ATHLETE_INFO_RECEIVED = 'ATHLETE_INFO_RECEIVED';

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