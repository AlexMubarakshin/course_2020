import { FirestoreConfig } from './firestore';

export type AppConfig = {
  firestore: FirestoreConfig;
}

const Config: AppConfig = {
  firestore: {
    apiKey: 'AIza....',
    applicationId: '1:27992087142:web:ce....',
    projectId: 'my-firebase-project',
    databaseURL: 'https://<OTHER_DATABASE_NAME>.firebaseio.com',
    storageBucket: '<OTHER_STORAGE_BUCKET>.appspot.com',
  }

};


export default Config;
