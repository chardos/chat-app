import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addMessage, subscribeToMessages } from '../firebase';

const Room = () => {
  const { roomCode } = useParams();
  const name = localStorage.getItem('username');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    subscribeToMessages(roomCode, (data) => {
      setMessageList(data);
    });
  }, [roomCode]);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSendMessage = () => {
    setText('');
    addMessage({
      roomCode,
      name,
      text,
    });
  };

  return (
    <div>
      <h1>This is room {roomCode}</h1>
      {messageList.map((message) => (
        <div>{message.text}</div>
      ))}
      <input id="text" onChange={onTextChange} value={text} />
      <button onClick={onSendMessage}>Send</button>
    </div>
  );
};

export default Room;
