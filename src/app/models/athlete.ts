import {Base} from './base';
import {AthleteAssociation} from './athlete-association';

export interface Athlete extends Base {
    startNumber: string;
    gender?: AthleteAssociation;
    team?: AthleteAssociation;
}
