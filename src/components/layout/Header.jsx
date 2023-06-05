import React from 'react';
import { $HeaderWrapperDiv, $LogoDiv, $WalletButton } from './style';
import LogoMini from '../../assets/logo/LogoMini.png';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

function Header() {
  return (
    <$HeaderWrapperDiv>
      <$LogoDiv>
        <img src={LogoMini} />
        <span>미션의형제들</span>
      </$LogoDiv>
      <$WalletButton>
        <MdOutlineAccountBalanceWallet />
        <span>Connect wallet</span>
      </$WalletButton>
    </$HeaderWrapperDiv>
  );
}

export default Header;
