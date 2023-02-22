import styled from 'styled-components';
import { spacing } from '../constants';

const TITLE_HEIGHT = 90;
const INPUT_BAR_HEIGHT = 110;

export const RoomWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0 ${spacing.l}px;
  height: ${TITLE_HEIGHT}px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
`;

export const InputStack = styled.div`
  display: flex;
  height: ${INPUT_BAR_HEIGHT}px;
  padding: ${spacing.l}px;
`;

export const MessageListWrapper = styled.div`
  height: calc(100vh - ${TITLE_HEIGHT}px - ${INPUT_BAR_HEIGHT}px);
  overflow: scroll;
`;

export const MessageList = styled.div`
  padding: ${spacing.l}px;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MessageGroup = styled.div`
  margin-top: ${spacing.l}px;
  display: flex;
  flex-direction: ${({ invert }) => (invert ? 'row-reverse' : 'row')};
  align-items: flex-end;
`;

export const Messages = styled.div`
  text-align: ${({ invert }) => (invert ? 'right' : 'left')};
`;

export const TextInputWrapper = styled.div`
  margin-right: ${spacing.s}px;
  flex-grow: 1;
`;
