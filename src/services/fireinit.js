import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyD1sTHBnX8x-0HfD8ak7yTZJFcZ_O_lf1M',
  authDomain: 'yehorpopov-db.firebaseapp.com',
  databaseURL: 'https://yehorpopov-db.firebaseio.com',
  projectId: 'yehorpopov-db',
  storageBucket: 'yehorpopov-db.appspot.com',
  // messagingSenderId: '724792675849'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
