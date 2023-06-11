import React from 'react';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import MainPage from './pages/Main';
import MissionDetail from './pages/Detail/MissionDetail';
import RegisterMissionPage from './pages/RegisterMission';
import Layout from './components/layout/Layout';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={'/'} element={<MainPage />} />
          <Route path={'/registerMission'} element={<RegisterMissionPage />} />
          <Route path={'/missionDetail/:id'} element={<MissionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
