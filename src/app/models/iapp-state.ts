import {EventDetails} from './event-details';
import {Notification} from './notification';
import {Langage} from './langage';

export interface IAppState {
    languages: {
        available?: Langage[]
        current?: Langage
    },
    notifications?: Notification[];
    event?: EventDetails;
}
