import { createContext } from 'react';
import firebase from 'firebase';
import FirebaseApp from 'firebase/app';
import 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!FirebaseApp.apps.length) {
      FirebaseApp.initializeApp(firebaseConfig);
      firebase.analytics();
      FirebaseApp.firestore()
        .enablePersistence({ synchronizeTabs: true })
        .catch((err) => console.log(err));
      this.auth = FirebaseApp.auth();
    }
    
  }
  async createUserWithEmailAndPassword(user, url) {
    const data = {};
    
    await new Promise((resolve, reject) => {
      this.auth
        .createUserWithEmailAndPassword(user.EMAIL, user.PASSWORD)
        .then((res) => {
          delete user.PASSWORD;
          data.id = user.EMAIL;
          data.uid = res.user.uid;
          data.EMAIL = user.EMAIL;
          data.photoURL = user.photoURL;
          data.name = user.name;
          res.user.sendEmailVerification({
            url,
          });
          res.user.updateProfile({
            displayName: user.name,
            photoURL: user.photoURL,
          });
          
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/email-already-in-use':
              reject(new Error(`El correo ${user.EMAIL} ya se encuentra registrado inicia sesion o registrate con otro correo`));
              break;
            default:
              reject(new Error(error));
          }
        });
    });
  };
      
}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };