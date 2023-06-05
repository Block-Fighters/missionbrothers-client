import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';
import RegisterMissionPage from './pages/RegisterMission';
import Layout from './components/layout/Layout';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/registerMission'} element={<RegisterMissionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
