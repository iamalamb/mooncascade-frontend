import {IAppState} from './models/iapp-state';
import {AppActions} from './app.actions';
import {tassign} from 'tassign';
import {AnyAction} from 'redux';
import collection from 'lodash/collection';

export function rootReducer(state: IAppState, action: AnyAction): IAppState {
    let newState: IAppState;
    switch (action.type) {
        case AppActions.NOTIFICATION_ADD:
            newState = state;
            newState.notifications.push(action.payload);
            return tassign(state, newState);
        case AppActions.NOTIFICATION_DELETE_ALL:
            newState = state;
            newState.notifications = [];
            return tassign(state, newState);
        case AppActions.NOTIFICATION_DELETE_ITEM:
            newState = state;
            newState.notifications = newState.notifications.filter(notification => notification.id !== action.payload);
            return tassign(state, newState);
        case AppActions.EVENT_REGISTERED:
            newState = state;
            newState.event.registered = true;
            newState.event.running = false;
            newState.event.completed = false;
            return tassign(state, newState);
        case AppActions.EVENT_STARTED:
            newState = state;
            newState.event.registered = true;
            newState.event.running = true;
            newState.event.completed = false;
            return tassign(state, newState);
        case AppActions.EVENT_COMPLETED:
            newState = state;
            newState.event.registered = true;
            newState.event.running = false;
            newState.event.completed = true;
            return tassign(state, newState);
        case AppActions.ATHLETE_INFO_RECEIVED:
            newState = state;
            newState.athletes = newState.athletes.filter(athlete => athlete.code !== action.payload.code);
            newState.athletes.push(action.payload);
            newState.athletes = collection.orderBy(newState.athletes, ['timeAtGate', 'timeAtFinish'], ['asc', 'desc']);
            newState.athletes = newState.athletes.slice(-10);
            return tassign(state, newState);
        default:
            return state;
    }
}