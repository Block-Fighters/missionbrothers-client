import styled from 'styled-components';
import { flexCustom } from '../../styles/theme';

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
`;

export const $ConfirmImg = styled.div`
    width: 655px;
    height: 100%;
`;