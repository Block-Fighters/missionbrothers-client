import styled from 'styled-components';
import { flexCustom } from '../../../styles/theme';

export const $HeaderWrapperDiv = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0 15vw;
  ${flexCustom('row', 'space-between', 'center')}
  border-bottom: 2px solid rgba(153,153,153,0.3);
`;

export const $LogoDiv = styled.div`
  ${flexCustom('row', 'center', 'center')}
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
`;
