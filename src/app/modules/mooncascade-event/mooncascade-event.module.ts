import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventContainerComponent} from './components/event-container/event-container.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        EventContainerComponent
    ],
    declarations: [EventContainerComponent]
})
export class MooncascadeEventModule {
}
