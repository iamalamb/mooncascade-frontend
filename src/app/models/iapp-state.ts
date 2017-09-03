import {EventDetails} from './event-details';
import {Notification} from './notification';
import {Language} from './language';

export interface IAppState {
    languages: {
        available?: Language[]
        current?: Language
    },
    notifications?: Notification[];
    event?: EventDetails;
}
