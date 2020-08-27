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
    }
  }

  async createUserWithEmailAndPassword(user, url) {
    const data = {};

    return await new Promise((resolve, reject) => {
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

  async loginMail(user) {
    return await new Promise((resolve, reject) => {
      console.log(user.EMAIL);
      this.auth.signInWithEmailAndPassword(user.EMAIL, user.PASSWORD)
        .then(() => {
          this.getDocument('user', user.EMAIL)
            .then((data) => {
              document.cookie = `EMAIL=${data.EMAIL}`;
              document.cookie = `name=${data.name}`;
              document.cookie = `id=${data.uid}`;
              document.cookie = `photoURL=${data.photoURL}`;
              window.location.href = '/';
            });
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/wrong-password':
              reject(new Error('La contraseña no es válida o el usuario no tiene una contraseña'));
              break;
            default:
              reject(new Error(error));
          }
        });
    });
  }

  async loginGoogle() {
    const data = {};
   return FirebaseApp.auth()
      .signInWithPopup(new FirebaseApp.auth.GoogleAuthProvider())
      .then((res) => {
        data.photoURL = res.user.photoURL;
        data.name = res.user.displayName;
        data.uid = res.user.uid;
        data.id = res.user.email;
        data.EMAIL = res.user.email;
        this.createSet('user', data);
        document.cookie = `EMAIL=${data.EMAIL}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.uid}`;
        document.cookie = `photoURL=${data.photoURL}`;
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      })
  }

  async loginFacebook() {
    const data = {};
    return this.auth
      .signInWithPopup(new FirebaseApp.auth.FacebookAuthProvider())
      .then((res) => {
        data.photoURL = res.user.photoURL;
        data.name = res.user.displayName;
        data.uid = res.user.uid;
        data.id = res.user.email;
        data.EMAIL = res.user.email;
        this.createSet('user', data);
        document.cookie = `EMAIL=${data.EMAIL}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.uid}`;
        document.cookie = `photoURL=${data.photoURL}`;
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async signOut() {
    this.auth.signOut().catch((e) => console.error(e));
  }


}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };