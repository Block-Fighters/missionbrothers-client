import React, { useEffect, useRef, useState } from 'react';
import {
  $MyPageWrapper,
  $MyPageUserMenu,
  $UserToken,
  $BuyTokenInput,
  $BuyTokenButton,
} from './style';
import { useAccount } from 'wagmi';

import { web3Instance, tokenContract } from '../../utils/getContract';

const MyPage = () => {
  const { address } = useAccount();
  const [myTokenState, setMyTokenState] = useState(0);
  const buyTokenInputRef = useRef('0');

  useEffect(() => {
    if (address) {
      getMyToken();
    }
  }, [address]);

  const getMyToken = async () => {
    console.log('address', address);
    const myToken = await tokenContract.methods.balanceOf(address).call();

    setMyTokenState(myToken);
  };

  const onClickBuyTokenButton = async () => {
    const value = buyTokenInputRef.current.value;
    await tokenContract.methods
      .buyTokens()
      .send({ from: address, value: web3Instance.utils.toWei(value, 'ether') });
    const myToken = await tokenContract.methods.balanceOf(address).call();

    setMyTokenState(myToken);
  };

  return (
    <$MyPageWrapper>
      <$MyPageUserMenu>
        <$UserToken>
          <span>My Bro : {myTokenState}</span>
          <$BuyTokenInput
            defaultValue={0}
            ref={buyTokenInputRef}
            type="number"
            min={0}
          />
          <$BuyTokenButton onClick={onClickBuyTokenButton}>
            구매
          </$BuyTokenButton>
        </$UserToken>
      </$MyPageUserMenu>
    </$MyPageWrapper>
  );
};

export default MyPage;
