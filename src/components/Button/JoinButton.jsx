import React from 'react';
import { $JoinButton } from './style';
import swal from 'sweetalert';
import MissionBro from '../../abi/MissionBro.json';
import { useAccount } from 'wagmi';
import { web3Instance } from '../../utils/getContract';

const JoinButton = ({ id }) => {
  const { address } = useAccount();
  const button = async () => {
    try {
      const participant = address;
      const MissionContract = new web3Instance.eth.Contract(
        MissionBro.abi,
        MissionBro.address
      );

      await MissionContract.methods
        .participateInMission(id)
        .send({ from: participant });
      console.log('미션참여 성공');
    } catch (error) {
      console.log('미션참여 실패', error);
    }
    swal({
      position: 'top-end',
      icon: 'success',
      title: '참가 신청되었습니다!',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <$JoinButton onClick={button}>
      <span>참가 신청</span>
    </$JoinButton>
  );
};

export default JoinButton;
