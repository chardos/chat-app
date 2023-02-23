import { useEffect, useState } from 'react';
import * as Styled from './ChatBubble.styled';

const ChatBubble = ({ children, ...restProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Styled.ChatBubble {...restProps} open={isOpen}>
      {children}
    </Styled.ChatBubble>
  );
};

export default ChatBubble;
