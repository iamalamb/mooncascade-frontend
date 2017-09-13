import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';

@Component({
    selector: 'app-event-table',
    templateUrl: './event-table.component.html',
    styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent implements OnInit {

    // Subscribes to a Redux observable list of Athletes
    @select('athletes') athletes$;

    constructor() {
    }

    ngOnInit() {
    }

}
