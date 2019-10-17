// May be we can use emotion later.
// So, with this, we don't need to change all of the components styles.
// Just change 'styled-components' to '@emotion/styled'
import styled, { css, keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import resetCSS from 'styled-reset';
import theme from '@theme';

export { styled, ifProp, prop, css };

// Rest of styles
export const globalStyles = `
${resetCSS}

@font-face {
    font-family: 'Bozon';
    font-weight: 400;
    src: url('/static/fonts/ROHH---Bozon-Regular.eot');
    src: url('/static/fonts/ROHH---Bozon-Regular.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/ROHH---Bozon-Regular.woff2') format('woff2'),
         url('/static/fonts/ROHH---Bozon-Regular.woff') format('woff'),
         url('/static/fonts/ROHH---Bozon-Regular.ttf')  format('truetype'),
         url('/static/fonts/ROHH---Bozon-Regular.svg#Bozon') format('svg');
}

@font-face {
    font-family: 'Bozon';
    font-weight: 600;
    src: url('/static/fonts/ROHH---Bozon-Demi-Bold.eot');
    src: url('/static/fonts/ROHH---Bozon-Demi-Bold.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/ROHH---Bozon-Demi-Bold.woff2') format('woff2'),
         url('/static/fonts/ROHH---Bozon-Demi-Bold.woff') format('woff'),
         url('/static/fonts/ROHH---Bozon-Demi-Bold.ttf')  format('truetype'),
         url('/static/fonts/ROHH---Bozon-Demi-Bold.svg#Bozon') format('svg');
}

@font-face {
    font-family: 'Bozon';
    src: url('/static/fonts/ROHH---Bozon-Bold.eot');
    src: url('/static/fonts/ROHH---Bozon-Bold.eot?#iefix') format('embedded-opentype'),
         url('/static/fonts/ROHH---Bozon-Bold.woff2') format('woff2'),
         url('/static/fonts/ROHH---Bozon-Bold.woff') format('woff'),
         url('/static/fonts/ROHH---Bozon-Bold.ttf')  format('truetype'),
         url('/static/fonts/ROHH---Bozon-Bold.svg#Bozon') format('svg');
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: Georgia, "Times New Roman", sans-serif;
  margin: 0;
  overflow-x: hidden;
  font-weight: 400;
  background-color: #F8F7F2;
  background-image: url('/')
}

body > div {
  height: 100%;
  width: 100%;
}

strong, b, h2, h1, h3, h4, h5, h6 {
  font-weight: 600;
}

h1 {
  display: block;
  font-size: 2em;
  margin: 15px 0;
}

p {
  margin: 30px 0;  
}
`;

export const media = {
  xs: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
  mdOnly: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.md}px) and (max-width: ${theme
        .grid.breakpoints.lg - 1}px) {
      ${css(...args)};
    }
  `,
  smOnly: (...args) => css`
    @media (min-width: ${theme.grid.breakpoints.sm}px) and (max-width: ${theme
        .grid.breakpoints.md - 1}px) {
      ${css(...args)};
    }
  `,
  smLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.sm}px) {
      ${css(...args)};
    }
  `,
  mdLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.md}px) {
      ${css(...args)};
    }
  `,
  lgLess: (...args) => css`
    @media (max-width: ${theme.grid.breakpoints.lg}px) {
      ${css(...args)};
    }
  `,
};

export const FadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
`;

export const FadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${prop('width', 300)}px;
  margin-bottom: 20px;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Grid = styled.div`
  width: ${prop('width', '100%')};
  margin-left: -5px;
  margin-right: -5px;
  ${ifProp(
    'width',
    css`
      margin: 0 auto;
    `
  )}
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0 5px 0px;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  width: auto;
  ${ifProp('extend', 'width: 100%;')}
  ${ifProp(
    'xs',
    media.xs`
      width: ${({ gridSize, xs }) =>
        (100 / (gridSize || theme.grid.size)) * xs}%;
    `
  )}
  ${ifProp(
    'sm',
    media.sm`
      width: ${({ gridSize, sm }) =>
        (100 / (gridSize || theme.grid.size)) * sm}%;
    `
  )}
  ${ifProp(
    'md',
    media.md`
      width: ${({ gridSize, md }) =>
        (100 / (gridSize || theme.grid.size)) * md}%;
    `
  )}
  ${ifProp(
    'lg',
    media.lg`
    width: ${({ gridSize, lg }) => (100 / (gridSize || theme.grid.size)) * lg}%;
  `
  )}
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  vertical-align: top;
`;

export const Button = styled.span`
  width: ${prop('width', '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #4d4751;
  background-color: #4d4751;
  color: #fff;
  height: 50px;
  border-radius: 27px;
  margin: 17px 0 0;
  cursor: pointer;

  &:hover {
    background-color: #868686;
  }
`;
