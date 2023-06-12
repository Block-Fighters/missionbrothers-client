import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $MyPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCustom('row')}
`;

export const $MyPageUserMenu = styled.div`
  width: 70vw;
  height: 212px;
  ${flexCustom('row', 'center', 'center')}
`;

export const $UserToken = styled.div`
  height: 32px;
  width: 602px;
  ${flexCustom('row', 'space-between', 'center')}
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const $BuyTokenInput = styled.input`
  height: 32px;
  width: 50px;
  font-size: 20px;
`;

export const $BuyTokenButton = styled.button`
  height: 32px;
  width: 100px;
  background-color: ${theme.gray[200]};
  border-radius: 10px;
  cursor: pointer;
`;
