import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjv4LRIdAbwgDbkderDQlKl3UsU613qGQ',
  authDomain: 'revents-51f7a.firebaseapp.com',
  databaseURL: 'https://revents-51f7a.firebaseio.com',
  projectId: 'revents-51f7a',
  storageBucket: 'revents-51f7a.appspot.com',
  messagingSenderId: '546114002499'
};

firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);

export default firebase;
