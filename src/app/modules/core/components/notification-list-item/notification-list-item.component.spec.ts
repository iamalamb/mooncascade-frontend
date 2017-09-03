import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {NotificationListItemComponent} from './notification-list-item.component';
import {Notification} from '../../../../models/notification';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NotificationListItemComponent', () => {
    let component: NotificationListItemComponent;
    let fixture: ComponentFixture<NotificationListItemComponent>;
    let notification: Notification;
    let element;
    let de;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationListItemComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationListItemComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        notification = {
            id: 'foo-bar',
            type: 'success',
            title: 'success',
            message: 'Lorum ipsum dolor'
        };
        component.notification = notification;
        fixture.detectChanges();
    });

    it('notification items should contain the correct content', async(() => {
        const title = element.getElementsByTagName('h3')[0];
        const content = element.getElementsByTagName('p')[0];
        expect(title.innerText).toBe(notification.title);
        expect(content.innerText).toBe(notification.message);
    }));
});
