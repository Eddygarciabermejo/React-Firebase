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

  // Metodos Base de datos

  async getDataColletion(collection) {
    const data = await new Promise((resolve, reject) => {
      FirebaseApp.firestore().collection(collection)
        .onSnapshot(({ docs }) => {
          const d = [];
          docs.forEach((doc) => {
            const details = {
              id: doc.id,
              ...doc.data(),
            };
            d.push(details);
            resolve(d);
          });
        });
    });
    return data;
  };

  async query1(collection, query) {
    const data = await new Promise((resolve, reject) => {
      FirebaseApp.firestore().collection(collection)
        .where(query.name, '==', query.data)
        .onSnapshot(({ docs }) => {
          const d = [];
          docs.forEach((doc) => {
            const details = {
              id: doc.id,
              ...doc.data(),
            };
            d.push(details);
            resolve(d);
          });
        });
    });
    return data;
  };

  async query2(collection, query1, query2) {
    const data = await new Promise((resolve) => {
      FirebaseApp.firestore().collection(collection)
        .where(query1.name, '==', query1.data)
        .where(query2.name, '==', query2.data)
        .onSnapshot(({ docs }) => {
          const d = [];
          docs.forEach((doc) => {
            const details = {
              id: doc.id,
              ...doc.data(),
            };
            d.push(details);
            resolve(d);
          });
        });
    });
    return data;
  };

  async createSet(collection, data) {
    const createSet = await new Promise(() => {
      FirebaseApp.firestore().collection(collection)
        .doc(String(data.id))
        .set(data)
        .then()
        .catch((error) => console.log(error));
    })
      .catch((e) => console.error(e));
    return createSet;
  };

  async create(collection, data) {
    const create = await new Promise(() => {
      FirebaseApp.firestore().collection(collection)
        .add(data)
        .catch((error) => error);
    });
    return create;
  };

  async delete(collection, id) {
    await new Promise(() => {
      FirebaseApp.firestore().collection(collection)
        .doc(id)
        .delete()
        .catch((error) => error);
    });
  };

  async getDocument(collection, id) {
    const getDocument = await new Promise((resolve) => {
      FirebaseApp.firestore().collection(collection)
        .doc(id)
        .get()
        .then((doc) => resolve(doc.data()))
        .catch((error) => error);
    });
    return getDocument;
  };

//auth

  async createUserWithEmailAndPassword(user, url) {
    const data = {};

    return await new Promise((resolve, reject) => {
      FirebaseApp.auth()
        .createUserWithEmailAndPassword(user.EMAIL, user.PASSWORD)
        .then((res) => {
          delete user.PASSWORD;
          data.id = user.EMAIL;
          data.uid = res.user.uid;
          data.EMAIL = user.EMAIL;
          data.name = user.name;
          res.user.sendEmailVerification({
            url,
          });
          res.user.updateProfile({
            displayName: user.name,
          });
          this.createSet('user', data);
          window.location.href = '/login';
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
    return new Promise((resolve, reject) => {
      FirebaseApp.auth().signInWithEmailAndPassword(user.EMAIL, user.PASSWORD)
        .then(() => {
          this.getDocument('user', user.EMAIL)
            .then((data) => {
              console.log('ok')
              resolve(data)
              document.cookie = `bidder=${JSON.stringify(data)}; max-age=3600; path=/`;
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
    return new Promise((resolve, reject) => {
      FirebaseApp.auth()
        .signInWithPopup(new FirebaseApp.auth.GoogleAuthProvider())
        .then((res) => {
          console.log(res)
          data.photoURL = res.user.photoURL;
          data.name = res.user.displayName;
          data.uid = res.user.uid;
          data.id = res.user.email;
          data.EMAIL = res.user.email;
          this.createSet('user', data);
          document.cookie = `bidder=${JSON.stringify(data)}; max-age=3600; path=/`;
          resolve(data)
        })
        .catch((error) => {
          reject(new Error(error));
        })
    })
  }
  async loginFacebook() {
    const data = {};
    return new Promise((resolve, reject) => {
      FirebaseApp.auth()
        .signInWithPopup(new FirebaseApp.auth.FacebookAuthProvider())
        .then((res) => {
          data.photoURL = res.user.photoURL;
          data.name = res.user.displayName;
          data.uid = res.user.uid;
          data.id = res.user.email;
          data.EMAIL = res.user.email;
          this.createSet('user', data);
          document.cookie = `bidder=${JSON.stringify(data)}; max-age=3600; path=/`;
          resolve(data)
        })
        .catch((error) => {
          reject(new Error(error));
        })
    })
  }


  async signOut() {
    FirebaseApp.auth().signOut().catch((e) => console.error(e));
  }


}

const FirebaseContext = createContext(null);

export { Firebase, FirebaseContext, FirebaseApp };