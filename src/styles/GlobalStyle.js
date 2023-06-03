import { createGlobalStyle } from 'styled-components';
import ResetStyle from './resetStyle';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  :root {
    --vh: 100%;
  }

  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'GmarketSansMedium';
  }
	
  body {
    background-color: ${theme.white};
    color: ${theme.black};
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p, span, button {
    font-family: 'GmarketSansMedium';
  }
`;

export default GlobalStyle;
