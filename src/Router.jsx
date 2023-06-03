import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/Main';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
