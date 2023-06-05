import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import MissionDetail from './pages/Detail/MisssionDetail';
import Register from './pages/Register/Register';
import RegisterMissionPage from './pages/RegisterMission';
import Layout from './components/layout/Layout';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/missiondetail'} element={<MissionDetail />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/registerMission'} element={<RegisterMissionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default AppRouter;
