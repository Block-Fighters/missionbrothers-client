import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AppRouter from './Router';
import { WagmiProvider } from './components/Provider/WagmiProvider';



function App() {

  return (
    <>
      <WagmiProvider>
        <RecoilRoot>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </RecoilRoot>
      </WagmiProvider>
    </>
  );
}

export default App;
