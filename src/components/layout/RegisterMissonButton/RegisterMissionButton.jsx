import React from 'react';
import { $RegisterMissionButtonDiv } from './style';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const RegisterMissionButton = () => {
  const navigate = useNavigate();

  const onClickRegisterButton = () => {
    navigate('/registerMission');
  };

  return (
    <$RegisterMissionButtonDiv onClick={onClickRegisterButton}>
      <AiOutlinePlus />
    </$RegisterMissionButtonDiv>
  );
};

export default RegisterMissionButton;
