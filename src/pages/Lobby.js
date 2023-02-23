import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { spacing } from '../constants';
import {
  generateRoomCode,
  validateName,
  validateRoomCode,
} from '../utils/utils';
import { Button } from '../components/Button.styled';
import Input from '../components/Input';
import * as Styled from './Lobby.styled';
import { Stack } from '../components/Stack.styled';

const Lobby = () => {
  const [name, setName] = useState(localStorage.getItem('username') || '');
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onNameChange = (e) => {
    const name = e.target.value;
    localStorage.setItem('username', name);
    setName(name);
  };

  const onRoomCodeChange = (e) => {
    setRoomCode(e.target.value.toUpperCase());
  };

  const onCreateRoom = (e) => {
    e.preventDefault();
    const errorMessage = validateName(name);
    const newRoomCode = generateRoomCode();

    if (errorMessage) {
      setError(errorMessage);
    } else {
      navigate(`/${newRoomCode}`);
    }
  };

  const onVisitRoom = (e) => {
    e.preventDefault();
    const errorMessage = validateName(name) || validateRoomCode(roomCode);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      navigate(`/${roomCode}`);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Panel>
        <form autocomplete="off">
          <Stack space={spacing.l}>
            <Styled.Heading>ChitChatr</Styled.Heading>

            <Input
              id="name"
              label="Name"
              onChange={onNameChange}
              value={name}
            />
            <Input
              id="roomCode"
              label="Room Code"
              onChange={onRoomCodeChange}
              value={roomCode}
            />

            <Stack space={spacing.s} horizontal>
              <Button type="submit" onClick={onVisitRoom}>
                Go to room
              </Button>
              <Button onClick={onCreateRoom}>Create room</Button>
            </Stack>
            {error && <div>{error}</div>}
          </Stack>
        </form>
      </Styled.Panel>
    </Styled.Wrapper>
  );
};

export default Lobby;
