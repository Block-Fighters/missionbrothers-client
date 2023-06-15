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

import MissionBro from '../../abi/MissionBro.json';

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

    setMyTokenState(web3Instance.utils.fromWei(myToken, 'ether'));
  };

  const onClickBuyTokenButton = async () => {
    const value = buyTokenInputRef.current.value;
    await tokenContract.methods
      .buyTokens()
      .send({ from: address, value: web3Instance.utils.toWei(value, 'ether') });
    const myToken = await tokenContract.methods.balanceOf(address).call();

    setMyTokenState(web3Instance.utils.fromWei(myToken, 'ether'));
    callApprove();
  };

  const callApprove = async () => {
    try {
      const amount = web3Instance.utils.toWei('100', 'ether');
      const missionContractAddress = new web3Instance.eth.Contract(
        MissionBro.abi,
        MissionBro.address
      );
      console.log(missionContractAddress);
      const approveTx = await tokenContract.methods
        .approve(MissionBro.address, amount)
        .send({
          from: address,
          gasLimit: web3Instance.utils.toHex(500000),
          gasPrice: web3Instance.utils.toHex(
            web3Instance.utils.toWei('10000', 'gwei')
          ),
        });

      console.log('approveTx 완료', approveTx.transactionHash);
    } catch (error) {
      console.log('approve함수 호출 에러', error);
    }
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
