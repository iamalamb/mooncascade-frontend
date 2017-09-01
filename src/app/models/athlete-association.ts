import {Base} from './base';
import {Athlete} from './athlete';

export interface AthleteAssociation extends Base {
    athletes?: Athlete;
}
