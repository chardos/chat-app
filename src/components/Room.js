import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { spacing } from '../constants';
import { addMessage, subscribeToMessages } from '../firebase';
import { Avatar } from './Avatar.styled';
import { Button } from './Button.styled';
import { ChatBubble } from './ChatBubble.styled';
import Input from './Input';
import * as Styled from './Room.styled';

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

  const onSendMessage = (e) => {
    e.preventDefault();
    setText('');
    addMessage({
      roomCode,
      name,
      text,
    });
  };

  return (
    <Styled.RoomWrapper>
      <Styled.Title>Room: {roomCode}</Styled.Title>

      <Styled.MessageList>
        {messageList.map((message) => (
          <Styled.Message invert={name === message.name}>
            <Avatar>{message.name[0].toUpperCase()}</Avatar>
            <ChatBubble key={message.id}>{message.text}</ChatBubble>
          </Styled.Message>
        ))}
      </Styled.MessageList>

      <form onSubmit={onSendMessage}>
        <Styled.InputStack horizontal>
          <Styled.TextInputWrapper>
            <Input id="text" onChange={onTextChange} value={text} />
          </Styled.TextInputWrapper>
          <Button type="submit">Send</Button>
        </Styled.InputStack>
      </form>
    </Styled.RoomWrapper>
  );
};

export default Room;
