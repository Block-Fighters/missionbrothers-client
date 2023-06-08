import React from 'react';
import { $JoinButton } from './style';


const JoinButton = () => {
    const button = () => {
        alert('신청되었습니다.');
    };
    return (
    <$JoinButton onClick={button}>
        <span>참가 신청</span>
    </$JoinButton>
    );
};


export default JoinButton;