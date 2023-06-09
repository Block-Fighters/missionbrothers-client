import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $ImageLoaderDiv = styled.div`
  width: 100%;
  height: 491px;
  background-color: ${theme.gray[200]};
  ${flexCustom('column', 'center', 'center')}
  color: ${theme.gray[500]};
  font-size: 130px;
  span {
    margin-top: 80px;
    font-size: 32px;
  }
  cursor: pointer;
`;
