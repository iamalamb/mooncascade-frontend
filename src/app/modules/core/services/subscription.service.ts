import {Inject, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {FirebaseApp} from 'angularfire2';

@Injectable()
export class SubscriptionService {

    private messaging: firebase.messaging.Messaging;

    constructor(@Inject(FirebaseApp) private firebaseApp: firebase.app.App) {

        this.firebaseApp.auth().signInAnonymously().catch((error) => {
            console.log(error);
        });
        this.firebaseApp.auth().onAuthStateChanged((user) => {
            console.log(user.getIdToken());
        });

        this.messaging = firebase.messaging(this.firebaseApp);
        this.messaging.requestPermission()
            .then(() => {
                console.log('Request permission granted');
                console.log();
            }).catch((error) => {
            console.log(error);
        });
    }

    public initMessaging(): void {
        this.messaging.onMessage((payload) => {
            console.log(payload);
        });
    }
}