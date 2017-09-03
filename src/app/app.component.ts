import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // General page title
    pageTitle: string;

    constructor(private titleService: Title) {
    }

    ngOnInit(): void {

        // Get the application name from the environment and set the page title
        this.pageTitle = 'Home - ' + environment.app_name;
        this.titleService.setTitle(this.pageTitle);
    }
}
