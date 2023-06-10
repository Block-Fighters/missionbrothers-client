import React, { useEffect } from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { $WalletButton } from './style';
import { useAccount, useConnect } from 'wagmi';
import axios from 'axios';

const ConnectWalletButton = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  //   const { disconnect } = useDisconnect();
  // const {
  //   chains,
  //   // switchNetworkError,
  //   // switchNetworkIsLoading,
  //   // pendingChacinId,
  //   switchNetwork,
  // } = useSwitchNetwork();

  const onClickLogin = async () => {
    await connect({ connector: connectors[0] });
  };

  useEffect(() => {
    if (address) {
      postLogin();
    }
  }, [address]);

  const setCookie = (cookieName, value, days) => {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    const cookieValue =
      escape(value) + (days == null ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookieName + '=' + cookieValue;
  };

  const postLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/user/login/${address}`
      );
      const data = response.data.token;
      console.log(response.data.token);
      if (response.status === 200) {
        // 로그인 성공
        setCookie('id', data, 1);
      }
    } catch (error) {
      // 로그인 실패
      console.error(error);
    }
  };

  return (
    <>
      {isConnected ? (
        <div>김재현</div>
      ) : (
        <$WalletButton onClick={onClickLogin}>
          <MdOutlineAccountBalanceWallet />
          <span>Connect wallet</span>
        </$WalletButton>
      )}
    </>
  );
};

export default ConnectWalletButton;