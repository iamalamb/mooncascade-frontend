import {Athlete} from './athlete';

export interface EventDetails{
    running: boolean;
    startedAt?: number;
    completedAt?: number;
    athletes?: Athlete[];
}
