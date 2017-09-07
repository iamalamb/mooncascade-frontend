import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventContainerComponent} from './components/event-container/event-container.component';
import {CoreModule} from '../core/core.module';
import {MomentModule} from 'angular2-moment';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        MomentModule
    ],
    exports: [
        EventContainerComponent
    ],
    declarations: [EventContainerComponent]
})
export class MooncascadeEventModule {
}
