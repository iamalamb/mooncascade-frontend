import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {NotificationListComponent} from './notification-list.component';
import {NotificationService} from '../../services/notification.service';
import {AppActions} from '../../../../app.actions';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';

describe('NotificationListComponent', () => {
    let component: NotificationListComponent;
    let fixture: ComponentFixture<NotificationListComponent>;
    let service: NotificationService;
    let notifications;
    let element;
    let de;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NotificationListComponent],
            imports: [NgReduxTestingModule],
            providers: [NotificationService, AppActions],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(inject([NotificationService], s => {
        service = s;
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NotificationListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        element = fixture.nativeElement;
        de = fixture.debugElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
