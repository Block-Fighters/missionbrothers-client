import React from 'react';
import { $JoinButton } from './style';
import swal from 'sweetalert';

const JoinButton = () => {
    const button = () => {
        swal({
            position: 'top-end',
            icon: 'success',
            title: '참가 신청되었습니다!',
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
    <$JoinButton onClick={button}>
        <span>참가 신청</span>
    </$JoinButton>
    );
};


export default JoinButton;