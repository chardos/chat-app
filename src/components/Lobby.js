import { useState } from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
  const [name, setName] = useState(localStorage.getItem('username'));
  const [roomCode, setRoomCode] = useState();

  const onNameChange = (e) => {
    const name = e.target.value;
    localStorage.setItem('username', name);
    setName(name);
  };

  const onRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  return (
    <div>
      <h1>Lobby</h1>
      <label htmlFor="name">Name</label>
      <input id="name" onChange={onNameChange} value={name} />
      <br />
      <label htmlFor="roomCode">Room code</label>
      <input id="roomCode" onChange={onRoomCodeChange} />
      <Link to={`/${roomCode}`}>Go to room</Link>
    </div>
  );
};

export default Lobby;
