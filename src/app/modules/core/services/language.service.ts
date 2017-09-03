import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Language} from '../../../models/language';
import {IAppState} from '../../../models/iapp-state'
import {NgRedux} from '@angular-redux/store';
import {AppActions} from '../../../app.actions';
import {isUndefined} from 'util';

@Injectable()
export class LanguageService {

    // Array of available languages for selection
    private languages: Language[];

    /**
     * Constructor function.
     *
     * @param {NgRedux<IAppState>} ngRedux
     * @param {AppActions} actions
     * @param locale string
     */
    constructor(private ngRedux: NgRedux<IAppState>,
                private actions: AppActions) {

        // Call the init function
        this.init();
    }

    /**
     * Basic init function.
     * Intends to load the languages from redux.
     * If they cannot be found, default to using
     * the environment file to load instead
     */
    init(): void {

        // First load up the languages from the environment
        this.languages = environment.languages.available;
        this.ngRedux.dispatch(this.actions.languageInit(this.languages));

        // Now set the default language
        const language: Language = this.find('is_default', true);
        this.change(language);
    }

    /**
     * Intends to switch the language.
     * Will dispatch to redux
     *
     * @param {Language} language
     */
    change(language: Language): void {

        // Dispatch to redux of course
        this.ngRedux.dispatch(this.actions.languageChanged(language));
    }

    /**
     * Utility function used to retrieve a language
     * from the list available. If a language CANNOT
     * be found, defaults to whichever is defined as
     * the default.
     *
     * @param {string} prop
     * @param value
     * @returns {Language}
     */
    find(prop: string, value: any): Language {

        // Attempt to find the language based on the props provided
        let language: Language = this.languages.find(lang => lang[prop] === value);

        // If the language ISN'T found.. simply return the default
        if (isUndefined(language)) {
            language = this.languages.find(lang => lang.is_default === true);
        }

        return language;
    }
}
