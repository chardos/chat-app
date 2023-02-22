import styled from 'styled-components';
import { spacing } from '../constants';

export const Avatar = styled.div`
  display: inline-block;
  margin-right: ${spacing.xs}px;
  width: 34px;
  height: 34px;
  line-height: 2.9;
  border-radius: 50%;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  background-color: ${({ theme }) => theme.light};
`;
