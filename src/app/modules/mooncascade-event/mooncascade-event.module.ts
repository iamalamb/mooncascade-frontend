import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventContainerComponent} from './components/event-container/event-container.component';
import {CoreModule} from '../core/core.module';
import {MomentModule} from 'angular2-moment';
import {EventTableComponent} from './components/event-table/event-table.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        MomentModule
    ],
    exports: [
        EventContainerComponent
    ],
    declarations: [EventContainerComponent, EventTableComponent]
})
export class MooncascadeEventModule {
}
