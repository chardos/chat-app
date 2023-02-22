import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { spacing } from '../constants';
import { generateRoomCode } from '../utils';
import { Button } from './Button.styled';
import Input from './Input';
import * as Styled from './Lobby.styled';
import { Stack } from './Stack.styled';

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
    setRoomCode(e.target.value.toUpperCase());
  };

  const onCreateRoom = (e) => {
    const newRoomCode = generateRoomCode();
    navigate(`/${newRoomCode}`);
  };

  const onVisitRoom = (e) => {
    navigate(`/${roomCode}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.Panel>
        <Stack space={spacing.l}>
          <Styled.Heading>ChitChatr</Styled.Heading>

          <Input id="name" label="Name" onChange={onNameChange} value={name} />
          <Input
            id="roomCode"
            label="Room Code"
            onChange={onRoomCodeChange}
            value={roomCode}
          />

          <Stack space={spacing.s} horizontal>
            <Button onClick={onVisitRoom}>Go to room</Button>
            <Button onClick={onCreateRoom}>Create room</Button>
          </Stack>
        </Stack>
      </Styled.Panel>
    </Styled.Wrapper>
  );
};

export default Lobby;
