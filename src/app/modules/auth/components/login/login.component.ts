import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: User;

    constructor() {
    }

    ngOnInit() {
        this.user    = {
            email: '',
            password: ''
        };
    }

    handlOnClick(): void {
        console.log(this.user);
    }
}
