import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import RegisterMissionButton from './RegisterMissonButton/RegisterMissionButton';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <RegisterMissionButton />
    </>
  );
};

export default Layout;
