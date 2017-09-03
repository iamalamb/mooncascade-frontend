import {TestBed, inject} from '@angular/core/testing';

import {LanguageService} from './language.service';
import {AppActions} from '../../../app.actions';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {environment} from '../../../../environments/environment';
import {Langage} from '../../../models/langage';

describe('LanguageService', () => {

    let service: LanguageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgReduxTestingModule],
            providers: [LanguageService, AppActions]
        });

        MockNgRedux.reset();
    });

    beforeEach(inject([LanguageService], s => {
        service = s;
    }));

    it('should correctly find a language', () => {

        const languages: Langage[] = environment.languages.available;
        const defaultLanguage: Langage = languages.find(language => language.default === true);

        service.init();
        expect(service.find('default', true)).toBe(defaultLanguage);

    });

    it('should dispatch correctly when init is called', () => {

        const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
        const languages: Langage[] = environment.languages.available;
        const defaultLanguage: Langage = languages.find(language => language.default === true);

        service.init();
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_INIT, payload: languages});
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_SWITCHED, payload: defaultLanguage});
    });

    it('should dispatch correctly when switch is called', () => {

        const spy = spyOn(MockNgRedux.getInstance(), 'dispatch');
        const languages: Langage[] = environment.languages.available;
        const defaultLanguage: Langage = languages.find(language => language.code === 'et');

        service.init();
        service.switch(defaultLanguage);
        expect(spy).toHaveBeenCalledWith({type: AppActions.LANGUAGE_SWITCHED, payload: defaultLanguage});
    });
});
