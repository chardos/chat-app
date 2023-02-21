import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  databaseURL:
    'https://chat-app-2a1ac-default-rtdb.asia-southeast1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export function writeUserData() {
  const db = getDatabase();
  set(ref(db, 'users/' + '123'), {
    foo: 'bar',
  });
}
