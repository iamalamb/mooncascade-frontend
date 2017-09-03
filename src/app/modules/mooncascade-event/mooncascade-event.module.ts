import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventContainerComponent} from './components/event-container/event-container.component';
import {CoreModule} from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        EventContainerComponent
    ],
    declarations: [EventContainerComponent]
})
export class MooncascadeEventModule {
}
