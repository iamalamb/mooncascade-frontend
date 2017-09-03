import {IAppState} from './models/iapp-state';
import {AppActions} from './app.actions';
import {tassign} from 'tassign';
import {AnyAction} from 'redux';

export function rootReducer(state: IAppState, action: AnyAction): IAppState {
    let newState: IAppState;
    switch (action.type) {
        case AppActions.LANGUAGE_INIT:
            newState = state;
            newState.languages.available = action.payload;
            return tassign(state, newState);
        case AppActions.LANGUAGE_SWITCHED:
            newState = state;
            newState.languages.current = action.payload;
            return tassign(state, newState);
        case AppActions.NOTIFICATION_ADD:
            newState = state;
            newState.notifications.push(action.payload);
            return tassign(state, newState);
        case AppActions.NOTIFICATION_DELETE_ALL:
            newState = state;
            newState.notifications = [];
            return tassign(state, newState);
        case AppActions.EVENT_DELAYED:
            return state;
        case AppActions.EVENT_STARTED:
            return state;
        case AppActions.EVENT_FINISHED:
            return state;
        default:
            return state;
    }
}