import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $Sticky = styled.div`
  width: 302px;
  height: 291px;
  border-radius: 20px;
  border: 1px solid ${theme.gray[500]};
  ${flexCustom('column', 'flex_start', '')}
  margin-top: 51px;
  margin-left: 48.8px;
  align-self: flex-start;
  top: 10px;
  position: sticky;
`;
export const $InnerDiv = styled.div`
    width: 100%;
    height : 100%;
    padding : 34px;
    ${flexCustom('column', 'center', 'center')}
`;
export const $InnerFirstDiv = styled.div`
    width : 100%;
    ${flexCustom('row', 'space-between', '')}
    img {
        width: 20px;
        height: 20px;
        margin-top: 7px;
      }
      padding-bottom : 48px; 
`;
export const $InnerSecondDiv = styled.div`
    width : 100%;
    ${flexCustom('row', 'flex-start', '')}
    font-size : 32px;
    font-weight : 'Bold';
    padding-bottom : 20px
    border-bottom : 1px solid ${theme.gray[500]};
`;
export const $InnerThirdDiv = styled.div`
      margin-top : 11px;
      font-size : 14px;
      font-weight : 'Regular';
      text-align : center;
      color : ${theme.gray[500]};


`;