import React from 'react';
import { $CardDiv, $Image, $Text, $Title } from '../MissionCard/style';

import img from '../../assets/MissionImg/Running.png';

function Card() {
  return (
    <$CardDiv>
      <$Image src={img} />
      <$Text>운동 미션</$Text>
      <$Title>마라톤 같이 뛰어요!</$Title>
      <$Text>모집기간 - 2023년 06월 01일까지</$Text>
      <$Text>미션기간 - 2023년 06월 02일 ~ 03일</$Text>
      <$Text>미션 참가비 - 1000브로</$Text>
    </$CardDiv>
  );
}
// 안녕하세요
export default Card;
