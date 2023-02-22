import styled from 'styled-components';
import { spacing } from '../constants';

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const Input = styled.input`
  display: block;
  border: 0;
  width: 100%;
  padding: ${spacing.s}px 0;
  outline: none;
  border-bottom: 2px solid ${(props) => props.theme.dark};
  font-family: inherit;
  font-weight: 700;
  font-size: 1.2rem;
  color: inherit;
  background: transparent;

  &:focus + div {
    width: 100%;
  }
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  border-bottom: 2px solid ${({ theme }) => theme.light};
  transition: 0.5s width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
