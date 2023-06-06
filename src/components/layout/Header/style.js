import styled from 'styled-components';
import theme, { flexCustom } from '../../../styles/theme';

export const $HeaderWrapperDiv = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0 15vw;
  ${flexCustom('row', 'space-between', 'center')}
`;

export const $LogoDiv = styled.div`
  ${flexCustom('row', 'center', 'center')}
  font-size: 24px;
  font-weight: 500;

  img {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
`;

export const $WalletButton = styled.button`
  cursor: pointer;
  width: 12vw;
  height: 40px;
  border: 1px solid ${theme.gray[900]};
  border-radius: 10px;
  font-weight: 300;
  font-size: 16px;
  padding: 0 15px;
  color: ${theme.gray[900]};
  span {
    font-size: 14px;
  }
  ${flexCustom('row', 'space-between', 'center')}

  :hover {
    background-color: ${theme.gray[900]};
    color: ${theme.white};
  }
`;
