import styled from 'styled-components';
import { spacing } from '../constants';
import { Stack } from './Stack.styled';

export const RoomWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: ${spacing.l}px;
  margin: 0;
  border-bottom: 1px solid ${({ theme }) => theme.dark};
`;

export const InputStack = styled(Stack)`
  padding: ${spacing.l}px;
`;
export const MessageList = styled.div`
  padding: ${spacing.l}px;
  flex-grow: 1;
`;

export const TextInputWrapper = styled.div`
  flex-grow: 1;
`;
