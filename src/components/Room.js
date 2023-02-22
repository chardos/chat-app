import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { spacing } from '../constants';
import { addMessage, subscribeToMessages } from '../firebase';
import { createMessageGroups } from '../utils';
import { Avatar } from './Avatar.styled';
import { Button } from './Button.styled';
import { ChatBubble } from './ChatBubble.styled';
import Input from './Input';
import { Link } from './Link.styled';
import * as Styled from './Room.styled';

const Room = () => {
  const { roomCode } = useParams();
  const name = localStorage.getItem('username');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);
  const messageListWrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);

  useEffect(() => {
    document.fonts.ready.then(scrollBottom);
  }, [messageList]);

  useEffect(() => {
    subscribeToMessages(roomCode, (data) => {
      setMessageList(data);
    });
  }, [roomCode]);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const scrollBottom = () => {
    const el = messageListWrapperRef.current;
    el.scrollTo({
      top: el.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setText('');
    if (text) {
      addMessage({
        roomCode,
        name,
        text,
      });
    }
  };

  const leaveRoom = () => {
    navigate('/');
  };

  const roomGroups = createMessageGroups(messageList);

  return (
    <Styled.RoomWrapper>
      <Styled.Header>
        <Styled.RoomCode>Room: {roomCode}</Styled.RoomCode>
        <Link onClick={leaveRoom}>Leave room</Link>
      </Styled.Header>

      <Styled.MessageListWrapper ref={messageListWrapperRef}>
        <Styled.MessageList>
          {roomGroups.map((roomGroup) => {
            const isInverted = name === roomGroup.name;
            return (
              <Styled.MessageGroup
                key={roomGroup.messages[0].id}
                invert={isInverted}
              >
                <Avatar invert={isInverted}>
                  {roomGroup.name[0].toUpperCase()}
                </Avatar>

                <Styled.Messages invert={isInverted}>
                  {roomGroup.messages.map((message) => (
                    <ChatBubble invert={isInverted}>{message.text}</ChatBubble>
                  ))}
                </Styled.Messages>
              </Styled.MessageGroup>
            );
          })}
        </Styled.MessageList>
      </Styled.MessageListWrapper>

      <form onSubmit={sendMessage}>
        <Styled.InputStack space={spacing.l} horizontal>
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
