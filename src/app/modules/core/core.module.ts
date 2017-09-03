import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NotificationListComponent} from './components/notification-list/notification-list.component';
import {NotificationService} from './services/notification.service';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NotificationListItemComponent } from './components/notification-list-item/notification-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule
    ],
    exports: [
        NavbarComponent,
        NotificationListComponent,
        NotificationListItemComponent
    ],
    declarations: [NavbarComponent, NotificationListComponent, NotificationListItemComponent],
    providers: [NotificationService]
})
export class CoreModule {
}
