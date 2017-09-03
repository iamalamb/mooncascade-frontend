import {Routes} from '@angular/router';
import {EventContainerComponent} from './modules/mooncascade-event/components/event-container/event-container.component';
import {NotFoundComponent} from './modules/errors/not-found/not-found.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: EventContainerComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];