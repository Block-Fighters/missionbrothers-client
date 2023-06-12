import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import MissionDetail from './pages/Detail/MissionDetail';
import RegisterMissionPage from './pages/RegisterMission';
import Layout from './components/layout/Layout';
import MyPage from './pages/MyPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/missionDetail'} element={<MissionDetail />} />
          <Route path={'/registerMission'} element={<RegisterMissionPage />} />
          <Route path={'/myPage'} element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
