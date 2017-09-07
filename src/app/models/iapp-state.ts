import {EventDetails} from './event-details';
import {Notification} from './notification';
import {Athlete} from './athlete';

/*
 * Interface used for Redux store
 */
export interface IAppState {
    notifications?: Notification[];
    event?: EventDetails;
    athletes?: Athlete[];
}
