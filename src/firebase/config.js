import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCcKMkTRggcCRnnSLw3EpezpV1GRfNguw0',
    authDomain: 'react-native-hw-32b41.firebaseapp.com',
    projectId: 'react-native-hw-32b41',
    storageBucket: 'react-native-hw-32b41.appspot.com',
    messagingSenderId: '374279114442',
    appId: '1:374279114442:web:4ae759ad7638eb4544ae33',
    measurementId: 'G-ZBKDJ21YLZ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
