import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '../../../core/services/subscription.service';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../../../models/iapp-state';
import {AppActions} from '../../../../app.actions';
import {Http} from '@angular/http';
import {environment} from '../../../../../environments/environment';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    // Base URL for all API requests
    private baseUrl: string = environment.api_base_url;
    @select('event') event$;

    constructor(private subscriptionService: SubscriptionService,
                private ngRedux: NgRedux<IAppState>,
                private actions: AppActions,
                private http: Http,
                private notificationService: NotificationService) {
    }

    ngOnInit() {
        // Initialise the subscription service function
        this.subscriptionService.init();
        // Once done, subscrible to messaging
        this.subscriptionService.initMessaging();
    }

    handleOnClickStart(): void {
        this.startEvent();
    }

    handleOnClickReload(): void {

    }

    private startEvent(): void {
        const url: string = this.baseUrl + '/event';
        this.http.post(url, {}).subscribe(
            (data) => {

                this.ngRedux.dispatch(this.actions.eventStarted());
            },
            (error) => {
                const message = 'There was an error attempting to start the event. Please check the console for more information.';
                this.notificationService.add('danger', 'Error', message);
                console.log(error);
            }
        );
    }
}
