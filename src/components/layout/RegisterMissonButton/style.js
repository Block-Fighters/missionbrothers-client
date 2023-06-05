import styled from 'styled-components';
import theme, { flexCustom } from '../../../styles/theme';

export const $RegisterMissionButtonDiv = styled.div`
  width: 80px;
  height: 80px;
  border: 6px solid ${theme.blue};
  border-radius: 40px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  ${flexCustom('row', 'center', 'center')}
  font-size: 60px;
  color: ${theme.yellow};
  cursor: pointer;
`;
