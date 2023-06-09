import React from 'react';
import { $Sticky, $InnerDiv, $InnerFirstDiv, $InnerSecondDiv,$InnerThirdDiv  } from './style';
import JoinButton from '../Button/JoinButton';
import ShareImg from '../../assets/icon/Share.png'
import UserImg from '../../assets/icon/User.png'

const JoinSticky = () => {
  return (
    <div>
      <$Sticky>
        <$InnerDiv>
          <$InnerFirstDiv>
            <span>
                <img src={UserImg}></img>
                <span style={{paddingLeft : '3px'}}>김요원</span>
            </span>
            <span><img src={ShareImg} style={{width: '30px', height : '30px'}}></img></span>
          </$InnerFirstDiv>
          <$InnerSecondDiv>1,000브로</$InnerSecondDiv>
          <JoinButton />
          <$InnerThirdDiv>00명 도전 중!</$InnerThirdDiv>
        </$InnerDiv>
      </$Sticky>
    </div>
  );
};

export default JoinSticky;
