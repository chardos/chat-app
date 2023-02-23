import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  push,
  remove,
  onValue,
} from 'firebase/database';
import {
  IS_TYPING_DB_PATH,
  MESSAGES_DB_PATH,
  ROOMS_DB_PATH,
} from './constants';

const firebaseConfig = {
  databaseURL:
    'https://chat-app-2a1ac-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

export function addMessage({ roomCode, name, text }) {
  const db = getDatabase();

  const messagesRef = ref(
    db,
    `${ROOMS_DB_PATH}/${roomCode}/${MESSAGES_DB_PATH}`
  );
  const pushRef = push(messagesRef);
  set(pushRef, {
    name,
    text,
  });
}

export function addIsTyping({ roomCode, name }) {
  const db = getDatabase();

  const isTypingRef = ref(
    db,
    `${ROOMS_DB_PATH}/${roomCode}/${IS_TYPING_DB_PATH}`
  );
  const pushRef = push(isTypingRef);
  set(pushRef, name);
}

export function removeIsTyping({ roomCode, id }) {
  const db = getDatabase();

  const isTypingRef = ref(
    db,
    `${ROOMS_DB_PATH}/${roomCode}/${IS_TYPING_DB_PATH}/${id}`
  );
  remove(isTypingRef);
}

export function subscribeToRoom(roomCode, callback) {
  const db = getDatabase();
  const roomRef = ref(db, `${ROOMS_DB_PATH}/${roomCode}`);
  onValue(roomRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      callback(data);
    } else {
      callback([]);
    }
  });
}
