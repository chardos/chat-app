import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { spacing } from '../constants';
import {
  addIsTyping,
  addMessage,
  removeIsTyping,
  subscribeToRoom,
} from '../firebase';
import {
  convertIsTypingToArray,
  convertToArray,
  createMessageGroups,
  isTypingListToString,
} from '../utils';
import { Avatar } from './Avatar.styled';
import { Button } from './Button.styled';
import ChatBubble from './ChatBubble';
import Input from './Input';
import { Link } from './Link.styled';
import * as Styled from './Room.styled';

const Room = () => {
  const { roomCode } = useParams();
  const name = localStorage.getItem('username');
  const [text, setText] = useState('');
  const [isTypingList, setIsTypingList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const messageListWrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name]);

  useEffect(() => {
    // fixes issue where we scroll to bottom then the font increases height of page
    document.fonts.ready.then(scrollBottom);
  }, [messageList]);

  useEffect(() => {
    subscribeToRoom(roomCode, ({ messages, isTyping }) => {
      setIsTypingList(convertIsTypingToArray(isTyping || []));
      setMessageList(convertToArray(messages));
    });
  }, [roomCode]);

  useEffect(() => {
    const typer = isTypingList.find((item) => item.name === name);
    const isAlreadyTyping = Boolean(typer);

    if (text && !isAlreadyTyping) {
      addIsTyping({ roomCode, name });
    }

    if (!text && isAlreadyTyping) {
      removeIsTyping({ roomCode, id: typer.id });
    }
  }, [text]);

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
  const isTypingString = isTypingListToString(isTypingList, name);
  console.log('isTypingString', isTypingString);

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
        {isTypingString ? (
          <Styled.IsTyping>{isTypingString} is typing...</Styled.IsTyping>
        ) : null}
      </Styled.MessageListWrapper>

      <form onSubmit={sendMessage} autocomplete="off">
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
