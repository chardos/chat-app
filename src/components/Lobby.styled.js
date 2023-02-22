import styled from 'styled-components';
import { spacing } from '../constants';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 400px;
  padding: ${spacing.m}px;
  margin: auto;
`;

export const Heading = styled.div`
  font-size: 48px;
  font-weight: 700;
`;
