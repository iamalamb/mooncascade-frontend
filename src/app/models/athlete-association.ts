import {Base} from './base';
import {Athlete} from './athlete';

/*
 * General interface to describe an Athlete
 * associations such as genders, teams, etc
 */
export interface AthleteAssociation extends Base {
    athletes?: Athlete;
}
