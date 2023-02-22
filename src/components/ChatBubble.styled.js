import styled, { css } from 'styled-components';
import { spacing } from '../constants';

const BORDER_RADIUS = 15;

const normal = css`
  border-radius: 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0;
  &:first-child {
    border-top-left-radius: ${BORDER_RADIUS}px;
  }

  &:last-child {
    border-bottom-left-radius: ${BORDER_RADIUS}px;
  }
`;

const inverted = css`
  border-radius: ${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px;
  &:first-child {
    border-top-right-radius: ${BORDER_RADIUS}px;
  }

  &:last-child {
    border-bottom-right-radius: ${BORDER_RADIUS}px;
  }
`;

export const ChatBubble = styled.div`
  color: white;
  padding: ${spacing.s}px ${spacing.m}px;
  background-color: ${({ theme }) => theme.dark};
  margin-top: ${spacing.xxs}px;

  ${({ invert }) => (invert ? inverted : normal)}
`;
