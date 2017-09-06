'use strict';

/*
 * Unfortunately this particular file MUST be in JS, it seems.
 * I have yet to find a reference or solution to compile it
 * in pure TS form :(
 */

importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '964218083224'
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});