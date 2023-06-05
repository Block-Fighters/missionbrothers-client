import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import MissionDetail from './pages/Detail/MisssionDetail';
import Register from './pages/Register/Register';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/missiondetail'} element={<MissionDetail />} />
        <Route path={'/register'} element={<Register />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default AppRouter;
