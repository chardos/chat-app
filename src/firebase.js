import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { ROOMS_DB_PATH } from './constants';

const firebaseConfig = {
  databaseURL:
    'https://chat-app-2a1ac-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export function addMessage({ roomCode, name, message }) {
  const db = getDatabase();

  const roomRef = ref(db, `${ROOMS_DB_PATH}/${roomCode}`);
  const newMessageRef = push(roomRef);
  set(newMessageRef, {
    name,
    message,
  });
}

export function subscribeToMessages(roomCode, callback) {
  const db = getDatabase();
  const roomRef = ref(db, `${ROOMS_DB_PATH}/${roomCode}`);
  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();
    console.log(typeof callback);
    callback(data);
  });
}
