import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addMessage } from '../firebase';

const Room = () => {
  const { roomCode } = useParams();
  const name = localStorage.getItem('username');
  const [message, setMessage] = useState('');

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSendMessage = () => {
    addMessage({
      roomCode,
      name,
      message,
    });
  };

  return (
    <div>
      <h1>This is room {roomCode}</h1>
      <input id="message" onChange={onMessageChange} value={message} />
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
};

export default Room;
