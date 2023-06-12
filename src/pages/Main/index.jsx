import React, { useState } from 'react';
import { $MainWrapper, $NavDiv, $NavButtonDiv, $NavSpan } from './style';
import CompletedMission from '../../components/Main/MissionCard/CompletedMission';
import ProgressingMission from '../../components/Main/MissionCard/ProgressingMission';
import RecruitingMission from '../../components/Main/MissionCard/RecruitingMission';

const MainPage = () => {
  const [nav, setNav] = useState(1);

  const onClickNav = (buttonId) => {
    setNav(buttonId);
  };


  return (
    <$MainWrapper>
      <$NavDiv>
        <$NavButtonDiv>
          <$NavSpan isActive={nav === 1} onClick={() => onClickNav(1)}>
            모집중인 미션
          </$NavSpan>
        </$NavButtonDiv>
        <$NavButtonDiv>
          <$NavSpan isActive={nav === 2} onClick={() => onClickNav(2)}>
            진행중인 미션
          </$NavSpan>
        </$NavButtonDiv>
        <$NavButtonDiv>
          <$NavSpan isActive={nav === 3} onClick={() => onClickNav(3)}>
            마감된 미션
          </$NavSpan>
        </$NavButtonDiv>
      </$NavDiv>
      {nav === 1 && <RecruitingMission />}
      {nav === 2 && <ProgressingMission />}
      {nav === 3 && <CompletedMission />}
    </$MainWrapper>
  );
};

export default MainPage;
