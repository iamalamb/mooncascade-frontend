import {IAppState} from './models/iapp-state';

export const INITIAL_STATE: IAppState = {
    notifications: [],
    athletes: [],
    event: {
        registered: false,
        running: false,
        completed: false
    }
};