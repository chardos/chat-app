import styled from 'styled-components';
import { spacing } from '../constants';

export const Button = styled.button`
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.light};
  padding: ${spacing.s}px ${spacing.m}px;
  border: 2px solid ${({ theme }) => theme.dark};
  box-shadow: 2px 2px 0 1px ${({ theme }) => theme.dark};
  font-family: inherit;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 100px;
  font-weight: 700;
  transition: transform 0.15s, box-shadow 0.15s;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0 1px ${({ theme }) => theme.dark};
  }
`;
