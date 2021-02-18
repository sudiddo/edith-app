import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD_AvEMO0vXVXWpKQH_wSnqjlvTVV3LIqI',
  authDomain: 'edith-app-12ee3.firebaseapp.com',
  projectId: 'edith-app-12ee3',
  storageBucket: 'edith-app-12ee3.appspot.com',
  messagingSenderId: '1096454639053',
  appId: '1:1096454639053:web:669c59e017bbcd071f8884',
  measurementId: 'G-T5NQK3FY6X',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
