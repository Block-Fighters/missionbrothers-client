import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $Active = styled.div`
    ${flexCustom('row', 'space-between', '')}
    margin: 10px 0 10px 0;
`;

export const $ActiveText = styled.div`
    ${flexCustom('row', 'flex-start', 'center')}
    width: 97px;
    height: 30px;
    font-size: 14pt;
    font-weight: 600;
`;

export const $ButtonCheck = styled.div`
    ${flexCustom('row', 'center', 'center')}
    width: 97px;
    height: 30px;
    background-color: #1211CA;
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    border: #1211CA solid 1px; 
    :hover {
        background-color: ${theme.white};
        color: ${theme.blue};
    }
`;

export const $ConfirmImg = styled.div`
    margin: 20px 0 20px 0;
    width: 655px;
    height: 100%;
    ${flexCustom('row', 'space-between', 'center')}
    flex-wrap: wrap;
    
`;