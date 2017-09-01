import {IAppState} from './models/iapp-state';
import {Action} from 'redux';
import {AppActions} from './app.actions';

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    switch (action.type) {
        case AppActions.EVENT_DELAYED:
            return lastState;
        case AppActions.EVENT_STARTED:
            return lastState;
        case AppActions.EVENT_FINISHED:
            return lastState;
        default:
            return lastState;
    }
}