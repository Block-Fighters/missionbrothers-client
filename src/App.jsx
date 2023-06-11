import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AppRouter from './Router';



function App() {

  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
