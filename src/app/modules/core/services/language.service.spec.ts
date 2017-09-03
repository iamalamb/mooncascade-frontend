import {TestBed, inject} from '@angular/core/testing';

import {LanguageService} from './language.service';
import {AppActions} from '../../../app.actions';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {environment} from '../../../../environments/environment';
import {Language} from '../../../models/language';

describe('LanguageService', () => {

    let service: LanguageService;
    let languages: Language[];
    let defaultLanguage: Language;
    let spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgReduxTestingModule],
            providers: [LanguageService, AppActions]
        });

        MockNgRedux.reset();
    });

    beforeEach(inject([LanguageService], s => {
        service = s;
        languages = environment.languages.available;
        defaultLanguage = languages.find(language => language.is_default === true);
        spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
    }));

    it('should correctly find a language', () => {
        expect(service.find('is_default', true)).toBe(defaultLanguage);
    });

    it('should return the default if the language cannot be found', () => {
        expect(service.find('code', 'za')).toBe(defaultLanguage);
    });

    it('should dispatch correctly when init is called', () => {
        service.init();
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_INIT, payload: languages});
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_CHANGED, payload: defaultLanguage});
    });

    it('should dispatch correctly when change is called', () => {
        service.change(defaultLanguage);
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_CHANGED, payload: defaultLanguage});
    });
});
