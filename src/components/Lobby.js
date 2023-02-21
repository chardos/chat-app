import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { generateRoomCode } from '../utils';

const Lobby = () => {
  const [name, setName] = useState(localStorage.getItem('username'));
  const [roomCode, setRoomCode] = useState();
  const navigate = useNavigate();

  const onNameChange = (e) => {
    const name = e.target.value;
    localStorage.setItem('username', name);
    setName(name);
  };

  const onRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
  };
  const onCreateRoom = (e) => {
    const roomCode = generateRoomCode();
    navigate(`/${roomCode}`);
  };

  return (
    <div>
      <h1>Lobby</h1>
      <button onClick={onCreateRoom}>Create room</button>

      <br />
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
