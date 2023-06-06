import styled from 'styled-components';
import theme, { flexCustom } from '../../../styles/theme';

export const $RegisterMissionButtonDiv = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid ${theme.blue};
  border-radius: 30px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  ${flexCustom('row', 'center', 'center')}
  font-size: 40px;
  color: ${theme.yellow};
  cursor: pointer;
`;
