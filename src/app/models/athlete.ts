import {Base} from './base';
import {AthleteAssociation} from './athlete-association';

export interface Athlete extends Base {
    code: string;
    startNumber: string;
    gender?: AthleteAssociation;
    team?: AthleteAssociation;
}
