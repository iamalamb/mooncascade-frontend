import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '../../../core/services/subscription.service';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../../../models/iapp-state';
import {AppActions} from '../../../../app.actions';

@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    // Subscribes to a Redux observable list of Athletes
    @select('athletes') athletes$;

    constructor(private subscriptionService: SubscriptionService, private ngRedux: NgRedux<IAppState>, private actions: AppActions) {
    }

    ngOnInit() {
        // Initialise the subscription service function
        this.subscriptionService.init();
        // Once done, subscrible to messaging
        this.subscriptionService.initMessaging();
    }
}
