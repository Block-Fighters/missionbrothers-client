import React from 'react';
import { $Sticky, $InnerDiv, $InnerFirstDiv, $InnerSecondDiv } from './style';
import JoinButton from '../Button/JoinButton';
import { IoPerson } from 'react-icons/io5';
import { IoMdShare } from 'react-icons/io';
import { IconContext } from 'react-icons';

const JoinSticky = ({ amount }) => {
  return (
    <div>
      <$Sticky>
        <$InnerDiv>
          <$InnerFirstDiv>
            <span>
              <IconContext.Provider value={{ size: '0.9em' }}>
                <IoPerson />
              </IconContext.Provider>
              <span style={{ paddingLeft: '3px' }}>김요원</span>
            </span>
            <IconContext.Provider value={{ size: '2em' }}>
              <IoMdShare />
            </IconContext.Provider>
          </$InnerFirstDiv>
          <$InnerSecondDiv>{amount} BRO</$InnerSecondDiv>
          <JoinButton />
        </$InnerDiv>
      </$Sticky>
    </div>
  );
};

export default JoinSticky;
