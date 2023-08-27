import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

import cursorPointer from '../assets/images/cursor.svg'
import cursor from '../assets/images/cursor-svgrepo-com.svg'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    cursor: url(${cursor}), auto;
  }

  body {
    margin: 0;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    background-color: ${theme.colors.primary};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: url(${cursorPointer}), pointer;
    background-color: transparent;
    border: 0;
  }
`