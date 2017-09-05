import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '../../../core/services/subscription.service';

@Component({
    selector: 'app-event-container',
    templateUrl: './event-container.component.html',
    styleUrls: ['./event-container.component.scss']
})
export class EventContainerComponent implements OnInit {

    constructor(private subscriptionService: SubscriptionService) {
    }

    ngOnInit() {
    }

}
