import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventContainerComponent} from './event-container.component';

describe('EventContainerComponent', () => {
    let component: EventContainerComponent;
    let fixture: ComponentFixture<EventContainerComponent>;
    let element;
    let de;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventContainerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        element = fixture.nativeElement;
        de = fixture.debugElement;
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
