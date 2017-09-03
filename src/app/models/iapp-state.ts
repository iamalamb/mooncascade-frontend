import {EventDetails} from './event-details';
import {Notification} from './notification';

export interface IAppState {
    notifications?: Notification[];
    event?: EventDetails;
}
