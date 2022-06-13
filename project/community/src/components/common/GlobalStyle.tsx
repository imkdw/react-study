import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    height: 100vh;
    overflow: hidden;
  }

  #root {
    height: 100%;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
