import styled from 'styled-components';
import { spacing } from '../constants';

const TITLE_HEIGHT = 80;
const INPUT_BAR_HEIGHT = 110;

export const RoomWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.l}px;
  height: ${TITLE_HEIGHT}px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
`;

export const RoomCode = styled.h1`
  font-size: 20px;
`;

export const InputStack = styled.div`
  display: flex;
  gap: ${spacing.m}px;
  height: ${INPUT_BAR_HEIGHT}px;
  padding: ${spacing.l}px;
`;

export const MessageListWrapper = styled.div`
  height: calc(100vh - ${TITLE_HEIGHT}px - ${INPUT_BAR_HEIGHT}px);
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const MessageList = styled.div`
  padding: ${spacing.l}px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const IsTyping = styled.div`
  padding: 0 ${spacing.l}px;
`;

export const MessageGroup = styled.div`
  margin-top: ${spacing.l}px;
  display: flex;
  gap: ${spacing.s}px;
  flex-direction: ${({ invert }) => (invert ? 'row-reverse' : 'row')};
  align-items: flex-end;
`;

export const Messages = styled.div`
  text-align: ${({ invert }) => (invert ? 'right' : 'left')};

  > div {
    float: ${({ invert }) => (invert ? 'right' : 'left')};
    clear: ${({ invert }) => (invert ? 'right' : 'left')};
  }
`;

export const TextInputWrapper = styled.div`
  flex-grow: 1;
`;
