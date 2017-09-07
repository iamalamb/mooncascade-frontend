import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '../../../core/services/subscription.service';
import {select} from '@angular-redux/store';

@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    @select('athletes') athletes$;

    constructor(private subscriptionService: SubscriptionService) {
    }

    ngOnInit() {
        this.subscriptionService.init();
        this.subscriptionService.initMessaging();
    }

}
