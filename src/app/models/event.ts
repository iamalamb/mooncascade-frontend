import {Athlete} from './athlete';

export interface Event {
    running: boolean;
    startedAt?: number;
    completedAt?: number;
    athletes?: Athlete[];
}
