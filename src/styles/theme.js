import { css } from 'styled-components';

const theme = {
  white: '#ffffff',
  gray: {
    50: '#e2e2e2',
    100: '#dadada',
    200: '#cacaca',
    300: '#bababa',
    400: '#a9a9a9',
    500: '#999999',
    600: '#818181',
    700: '#686868',
    800: '#505050',
    900: '#373737',
  },
  blue: '#1211CA',
  yellow: '#F9B314',
  black: '#000000',
};

export default theme;

export const flexCustom = (
  flexDirection = 'initial',
  justifyContent = 'center',
  alignItems = 'center'
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
