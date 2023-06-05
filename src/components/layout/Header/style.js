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
  font-size: 40px;
  font-weight: 700;

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 6px;
  }
`;

export const $WalletButton = styled.button`
  cursor: pointer;
  width: 15vw;
  height: 40px;
  border: 3px solid ${theme.gray[900]};
  border-radius: 10px;
  font-weight: bold;
  font-size: 30px;
  padding: 0 15px;
  color: ${theme.gray[900]};
  span {
    font-size: 16px;
  }
  ${flexCustom('row', 'space-between', 'center')}

  :hover {
    background-color: ${theme.gray[900]};
    color: ${theme.white};
  }
`;
