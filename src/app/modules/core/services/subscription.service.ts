import {Inject, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseApp} from 'angularfire2';
import {NotificationService} from './notification.service';
import {Http} from '@angular/http';
import {environment} from '../../../../environments/environment';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../../models/iapp-state';
import {AppActions} from '../../../app.actions';

@Injectable()
export class SubscriptionService {

    // Base URL for all API requests
    private baseUrl: string = environment.api_base_url;
    // Sets up Firebase messaging
    private messaging: firebase.messaging.Messaging;

    constructor(@Inject(FirebaseApp) private firebaseApp: firebase.app.App,
                private notificationService: NotificationService,
                private http: Http, private ngRedux: NgRedux<IAppState>,
                private actions: AppActions) {
    }

    /*
     * Init function. Performs the following:
     * 1) Attempts to sign into Firebase using anon authentication (In a real-world scenario this would be very different)
     * 2) Once authenticated attempt to subscribe the user.
     */
    public init(): void {

        this.messaging = firebase.messaging(this.firebaseApp);

        // Sign the user in anonymously
        this.firebaseApp.auth().signInAnonymously().catch((error) => {
            const message = 'There was an error attempting to register you with Firebase. Please check the console for more information.';
            this.notificationService.add('danger', 'Error', message);
            console.log(error);
        });

        // Once th user is successfully authenticated, subscribe them
        this.firebaseApp.auth().onAuthStateChanged((user) => {
            this.subscribeUser();
        });
    }

    /*
     * Performs the following:
     * 1) Attempts to request permission to display notifications
     * 2) Returns a token from Firebase
     * 3) Attempts to register the user with the API
     */
    public subscribeUser(): void {

        this.messaging.requestPermission()
            .then(() => {

                const message = 'You have been successfully registered to listen to Firebase FCM messages for the event!';
                this.notificationService.add('success', 'Success', message);

                return this.messaging.getToken();

            })
            .then(token => this.registerUser(token))
            .catch((error) => {
                const message = 'There seems to have been an error registering you to listen to Firebase FCM messages!';
                this.notificationService.add('success', 'Success', message);
                console.log(error);
            });
    }

    /*
     * Performs the following:
     * 1) Attempts to register the user token provided by Firebase with the API
     */
    public registerUser(token: string): void {

        const payload = {
            token: token
        };

        // Send a post to the appropriate URL
        const url: string = this.baseUrl + '/register';
        this.http.post(url, payload).subscribe(
            (data) => {

                const message = 'You have been successfully registered for the event with the API!';
                this.notificationService.add('success', 'Success', message);
            },
            (error) => {
                const message = 'There was an error attempting to register you with the API. Please check the console for more information.';
                this.notificationService.add('danger', 'Error', message);
                console.log(error);
            }
        );
    }

    /*
     * Performs the following:
     * 1) Handles messages provided by Firebase
     */
    public initMessaging(): void {
        this.messaging.onMessage((payload) => {
            console.log(payload);
            switch (payload['data']['event']) {
                case 'event-start':
                    this.notificationService.add('info', 'Event Started', 'The event has officially started. Athletes should be coming through shortly.');
                    break;
                case 'event-completed':
                    this.notificationService.add('info', 'Event Completed', 'The event has officially ended. There are no more athletes to process.');
                    break;
                case 'athlete-event':
                    const athlete = JSON.parse(payload['data']['entity']);
                    this.ngRedux.dispatch(this.actions.athleteInfoReceieved(athlete));
                    this.notificationService.deleteAll();
                    break;
            }
        });
    }
}