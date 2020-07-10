import { createGlobalStyle, css } from 'styled-components';

const bodyStyles = css`
  width: 90%;
  margin: 20px;
  font-family: Helvatica, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  box-sizing: border-box;
  font-size: 1rem;
  & h1 {
    font-size: 1.8rem;
  }

  & h2 {
    font-size: 1.6rem;
  }

  & h3 {
    font-size: 1.4rem;
  }

  & h4 {
    font-size: 1.2rem;
  }

  & h5 {
    font-size: 1.1rem;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
