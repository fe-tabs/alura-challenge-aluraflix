import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --gray-dark: #212121;
    --gray-mid: #262626;
    --gray-light: #F5F5F5;
    --blue: #2271D1;
    --black: #00000090;
    --white: #FFF;

    --primary-font-family: 'Roboto', sans-serif;
    --secondary-font-family: 'Source Sans Pro', monospace;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--gray-dark);
    color: var(--gray-light);
    font-family: var(--primary-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;