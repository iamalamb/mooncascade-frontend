import {Injectable} from '@angular/core';
import {SubscriptionService} from './modules/core/services/subscription.service';

@Injectable()
export class AppConfig {


    constructor(private subscriptionService: SubscriptionService) {
    }

    init(): void {
        // this.subscriptionService.init();
    }
}