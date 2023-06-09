import React from 'react';
import {
  $Small,
  $Title,
  $Image,
  $titleDiv,
  $Line,
  $Table1,
  $Table2,
  $TableText1,
  $TableText2,
  $TotalDiv,
  $LeftDiv,
} from '../Detail/style';
import JoinSticky from '../../components/Join/JoinSticky';
import img from '../../assets/MissionImg/Running.png';

function MissionDetail() {
 const detailDate =   {
    type: '운동', // 주제
    title: '마라톤 같이 뛰어요!', // 제목
    recruitmentPeriod: '2023년 06월 01일까지', // 모집기간
    missionPeriod: '2023년 06월 02일 ~ 03일', // 미션기간
    fee: 1000, // 미션참가비
    registrant: '김재현', // 미션등록자
    participant: 100, // 미션참가자 수
    rule: '<p>테스트</p><p><br></p><p><strong>이건 테스트 입니다</strong></p><h6>test test test</h6><p>1234</p><p><br></p><p>하나 둘 셋 넷</p>', // 상세 내용
  };
  
  return (
    <div>
      <$titleDiv>
        <$Line>
          <$Small>{detailDate.type}</$Small>
          <$Title>{detailDate.title}</$Title>
        </$Line>
      </$titleDiv>
      <div>
        <$TotalDiv>
          <$LeftDiv>
            <$Image src={img} />
            <div>
              <div>
                <$Table1>
                  <$TableText1>모집기간</$TableText1>
                </$Table1>
                <$Table2>
                  <$TableText2>{detailDate.recruitmentPeriod}</$TableText2>
                </$Table2>
              </div>
              <div>
                <$Table1 style={{borderBottom : '1px solid #999999'}}>
                  <$TableText1>미션기간</$TableText1>
                </$Table1>
                <$Table2 style={{borderBottom : '1px solid #999999'}}>
                  <$TableText2>{detailDate.missionPeriod}</$TableText2>
                </$Table2>
              </div>
              <$Line style={ {paddingTop : '50px',width:'655px', color :'#BABABA'}}></$Line>
            </div>
          </$LeftDiv>
          <JoinSticky/>
        </$TotalDiv>
      </div>
</div>
)};

export default MissionDetail;
