import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventContainerComponent} from './event-container.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('EventContainerComponent', () => {
    let component: EventContainerComponent;
    let fixture: ComponentFixture<EventContainerComponent>;
    let element;
    let de;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventContainerComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventContainerComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the correct page title', () => {
        fixture.whenStable().then(() => {
            expect(element.querySelector('h1').innerText).toBe('View Event Results');
        });
    });
});
