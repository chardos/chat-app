import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addMessage, subscribeToMessages } from '../firebase';
import { createMessageGroups } from '../utils';
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
  const messageListWrapperRef = useRef(null);
  const navigate = useNavigate();
  console.log('messageList', messageList);
  const scrollBottom = () => {
    const el = messageListWrapperRef.current;
    el.scrollTo({
      top: el.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

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

  const onSendMessage = (e) => {
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

  const roomGroups = createMessageGroups(messageList);

  console.log('roomGroups', roomGroups);

  return (
    <Styled.RoomWrapper>
      <Styled.Title>Room: {roomCode}</Styled.Title>

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
                    <>
                      <ChatBubble key={message.id}>{message.text}</ChatBubble>
                      <br />
                    </>
                  ))}
                </Styled.Messages>
              </Styled.MessageGroup>
            );
          })}
        </Styled.MessageList>
      </Styled.MessageListWrapper>

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
