/*eslint-disable*/
import firebase from 'firebase/app';
import 'firebase/messaging';

export const config = {
  appId: process.env.REACT_APP_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  publicVAPIDkey: process.env.REACT_APP_PUBLIC_VAPID_KEY,
};

firebase.initializeApp(config);

const initNotificationWeb = async () => {
  const messaging = firebase.messaging();

  messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    config.publicVAPIDkey || 'xxxx',
  );

  try {
    await messaging.requestPermission();
    const fcmToken: string | null = await messaging.getToken();
    if (!fcmToken) return;
  } catch (error) {
    if (error.code === 'messaging/permission-blocked') {
      console.log('FCM: Please Unblock Notification Request Manually');
    } else {
      console.log(`FCM: Error Occurred : ${error}`);
    }
  }
};

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken: unknown) => {
        resolve(firebaseToken);
      })
      .catch((err: any) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    const messaging = firebase.messaging();
    messaging.onMessage((payload: unknown) => {
      resolve(payload);
    });
  });

export default initNotificationWeb;
