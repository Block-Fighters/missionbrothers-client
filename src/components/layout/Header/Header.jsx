import React from 'react';
import { $HeaderWrapperDiv, $LogoDiv } from './style';
import LogoMini from '../../../assets/logo/LogoMini.png';
import { useNavigate } from 'react-router-dom';
import ConnectWalletButton from '../../ConnectWalletButton/ConnectWalletButton';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <$HeaderWrapperDiv>
      <$LogoDiv onClick={onClickLogo}>
        <img src={LogoMini} />
        <span>미션의형제들</span>
      </$LogoDiv>
      <ConnectWalletButton />
    </$HeaderWrapperDiv>
  );
};

export default Header;
