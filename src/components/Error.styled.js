import styled from 'styled-components';
import { ERROR_COLOR, spacing } from '../constants';

export const Error = styled.div`
  padding: ${spacing.m}px;
  color: ${ERROR_COLOR};
  background: ${({ theme }) => theme.light};
  border: 1px solid ${ERROR_COLOR};
`;
