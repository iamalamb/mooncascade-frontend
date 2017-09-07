import {Base} from './base';
import {AthleteAssociation} from './athlete-association';

/*
 * General interface to describe an athlete that
 * is displayed in the table
 */
export interface Athlete extends Base {
    code: string;
    startNumber: string;
    gender?: AthleteAssociation;
    team?: AthleteAssociation;
}
