import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './modules/core/core.module';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppActions} from './app.actions';
import {IAppState} from './models/iapp-state';
import {rootReducer} from './app.reducer';
import {INITIAL_STATE} from './app.store';
import {MooncascadeEventModule} from './modules/mooncascade-event/mooncascade-event.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule,
        NgbModule.forRoot(),
        CoreModule,
        MooncascadeEventModule
    ],
    providers: [AppActions],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

        const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

        ngRedux.configureStore(
            rootReducer,
            INITIAL_STATE,
            [],
            storeEnhancers
        );
    }
}
