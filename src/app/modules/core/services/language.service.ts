import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Langage} from '../../../models/langage';
import {IAppState} from '../../../models/iapp-state'
import {NgRedux} from '@angular-redux/store';
import {AppActions} from '../../../app.actions';

@Injectable()
export class LanguageService {

    private languages: Langage[];

    constructor(private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    }

    init(): void {

        // First load up the languages from the environment
        this.languages = environment.languages.available;
        this.ngRedux.dispatch(this.actions.languageInit(this.languages));

        // Now set the default language
        const language: Langage = this.find('default', true);
        this.switch(language);
    }

    switch(language: Langage): void {
        this.ngRedux.dispatch(this.actions.languageSwitched(language));
    }

    find(prop: string, value: any): Langage {
        const language: Langage = this.languages.find(lang => lang[prop] === value);
        return language;
    }
}
