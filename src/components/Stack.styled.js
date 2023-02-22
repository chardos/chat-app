import styled from 'styled-components';
import { spacing } from '../constants';

export const Stack = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: ${(props) => props.space || spacing.m}px;
`;
