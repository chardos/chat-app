import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { ROOMS_DB_PATH } from './constants';
import { convertToArray } from './utils';

const firebaseConfig = {
  databaseURL:
    'https://chat-app-2a1ac-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export function addMessage({ roomCode, name, text }) {
  const db = getDatabase();

  const roomRef = ref(db, `${ROOMS_DB_PATH}/${roomCode}`);
  const newMessageRef = push(roomRef);
  set(newMessageRef, {
    name,
    text,
  });
}

export function subscribeToMessages(roomCode, callback) {
  const db = getDatabase();
  const roomRef = ref(db, `${ROOMS_DB_PATH}/${roomCode}`);
  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();
    callback(convertToArray(data));
  });
}
