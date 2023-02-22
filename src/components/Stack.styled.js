import styled from 'styled-components';
import { spacing } from '../constants';

export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};

  & > * {
    margin-${({ horizontal }) => (horizontal ? 'right' : 'bottom')}: ${(
  props
) => props.space || spacing.m}px;
  }

  & > *:last-child {
    margin: 0;
  }
`;
