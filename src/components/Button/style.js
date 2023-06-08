import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $JoinButton = styled.button`
  cursor: pointer;
  width: 242px;
  height: 50px;
  border: 1px solid ${theme.blue};
  border-radius: 5px;
  font-weight: 300;
  font-size: 16px;
  padding: 0 15px;
  color: ${theme.white};
  background-color : ${theme.blue};
  span {
    font-size: 14px;
  }
  ${flexCustom('row', 'center', 'center')}

  :hover {
    background-color: ${theme.white};
    color: ${theme.blue};
  }
`;
