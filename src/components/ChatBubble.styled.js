import styled from 'styled-components';
import { spacing } from '../constants';

export const ChatBubble = styled.span`
  display: inline-block;
  color: white;
  padding: ${spacing.xs}px ${spacing.s}px;
  background-color: ${({ theme }) => theme.dark};
  border-radius: 100px;
  margin: ${spacing.xxs}px;
`;
