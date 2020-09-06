importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyDVrZFvCejBobPBNoqCyi5SV2G_voAly7k",
    authDomain: "lioubi-me.firebaseapp.com",
    databaseURL: "https://lioubi-me.firebaseio.com",
    projectId: "lioubi-me",
    storageBucket: "lioubi-me.appspot.com",
    messagingSenderId: "1094234831347",
    appId: "1:1094234831347:web:8ab60fbc3da399386fba86",
    measurementId: "G-Q0V1YN7R7N"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
