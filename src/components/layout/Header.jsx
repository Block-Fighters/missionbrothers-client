import React from 'react';
import { $HeaderWrapperDiv } from './style';

function Header() {
  return (
    <$HeaderWrapperDiv>
      <div>logo부분</div>
      <div>지갑연동버튼부분</div>
    </$HeaderWrapperDiv>
  );
}

export default Header;
