import {Component, OnDestroy} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {CounterActions} from './app.actions';
import {IAppState} from './app.store';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    @select() readonly count$: Observable<number>

    constructor(private ngRedux: NgRedux<IAppState>, private actions: CounterActions) {
    }

    increment() {
        this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        this.ngRedux.dispatch(this.actions.decrement());
    }
}
