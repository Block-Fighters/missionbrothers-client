import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $MainWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
`;

export const $NavDiv = styled.div`
  ${flexCustom('row', 'space-between', 'center')}
  width: 100%;
  height: 32px;
  margin-top: 50px;
  margin-bottom: 70px;
`;

export const $NavButtonDiv = styled.div`
  ${flexCustom('row', 'center', 'center')}
  width: 20vw;
  height: 100%;
`;

export const $NavSpan = styled.span`
  cursor: pointer;
  color: ${(props) => (props.isActive ? theme.yellow : theme.gray[500])};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
  :hover {
    transform: scale(1.1);
  }
`;
