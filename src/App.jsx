import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AppRouter from './Router';
import Header from './components/layout/Header';


function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header />
          <AppRouter />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
