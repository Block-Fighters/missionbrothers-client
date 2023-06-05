import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $CardDiv = styled.div`
  width: 20vw;
  height: 360px;
  border-radius: 30px;
  border: 2px solid ${theme.gray[500]};
//   ${flexCustom('column', 'space-between', 'center')}

`;


 export const $Image = styled.img`
  width: 93%;
  height: auto;
  object-fit: contain;
  border-radius: 30px 30px 0 0 ;
  margin-top : 0%
  margin-right: 0%;
  margin-left: 0%;
`;

export const $CardContent = styled.div`
${flexCustom('column', 'space-between', 'start')}
text-align: left;

`;


export const $Text = styled.div`
    font-size : 12px;
    margin-top: 6px;
    margin-left : 10px;
    color:${theme.gray[500]};
`;

export const $Title = styled.div`
    //안녕하세요 
    font-size: 24px;
    margin-top: 6px;
    margin-bottom: 17px;
    margin-left : 10px;
`;