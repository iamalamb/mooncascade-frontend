import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
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
import {ErrorsModule} from './modules/errors/errors.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AppConfig} from './app.config';

export function initConfig(config: AppConfig) {
    return () => config.init();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgReduxModule,
        NgbModule.forRoot(),
        CoreModule,
        ErrorsModule,
        MooncascadeEventModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [
        AppActions,
        AppConfig,
        {provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true},

    ],
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
