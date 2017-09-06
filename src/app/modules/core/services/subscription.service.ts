import {Inject, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseApp} from 'angularfire2';
import {NotificationService} from './notification.service';
import {Http} from '@angular/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class SubscriptionService {

    private baseUrl: string = environment.api_base_url;
    private messaging: firebase.messaging.Messaging;

    constructor(@Inject(FirebaseApp) private firebaseApp: firebase.app.App, private notificationService: NotificationService, private http: Http) {
    }

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

    public initMessaging(): void {
        this.messaging.onMessage((payload) => {
            console.log('Message received');
            console.log(payload);
        });
    }
}