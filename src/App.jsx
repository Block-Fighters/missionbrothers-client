import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AppRouter from './Router';
import Header from './components/layout/Header';
import Card from './components/MissionCard/Card';


function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <Card />
          <AppRouter />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
