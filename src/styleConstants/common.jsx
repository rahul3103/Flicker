/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  @font-face {
    font-family: "MY-Font";
    src: url("/static/fonts/AvertaStd-Regular.otf");
  }
  @font-face {
    font-family: "MY-Font";
    font-weight: bold;
    src: url("/static/fonts/AvertaStd-Bold.otf");
  }
  @font-face {
    font-family: "MY-Font";
    font-weight: 600;
    src: url("/static/fonts/AvertaStd-SemiBold.otf");
  }
  font-family: MY-Font, -apple-system, BlinkMacSystemFont, sans-serif;


  * {
    font-kerning: none;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    word-break: break-word;
    outline: none;
    text-decoration: none;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
}
`;
