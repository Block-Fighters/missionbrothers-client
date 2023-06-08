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
// import shareImg from '../../assets/icon/Share.png';
// import userImg from '../../assets/icon/User.png';
// import { flexCustom } from '../../styles/theme';

const MissionDetail = () => {
  return (
    <div>
      <$titleDiv>
        <$Line>
          <$Small>운동 미션</$Small>
          <$Title>마라톤 같이 뛰어요!</$Title>
        </$Line>
      </$titleDiv>
      <div>
        <$TotalDiv>
          <$LeftDiv>
            <$Image src={img} />
            <div>
              <div style={{ flexDirection: 'row' }}>
                <$Table1>
                  <$TableText1>모집기간</$TableText1>
                </$Table1>
                <$Table2>
                  <$TableText2>23년 06월 02일 ~ 06월 03일</$TableText2>
                </$Table2>
              </div>
              <div style={{ flexDirection: 'row' }}>
                <$Table1 style={{borderBottom : '1px solid #999999'}}>
                  <$TableText1>미션기간</$TableText1>
                </$Table1>
                <$Table2 style={{borderBottom : '1px solid #999999'}}>
                  <$TableText2>23년 06월 02일 ~ 06월 03일</$TableText2>
                </$Table2>
              </div>
              <$Line style={ {paddingTop : '50px',width:'655px', color :'#BABABA'}}></$Line>
            </div>
          </$LeftDiv>
          <JoinSticky/>
 
        </$TotalDiv>
      </div>
    </div>
  );
};

export default MissionDetail;
