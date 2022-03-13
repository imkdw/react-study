import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  input, button {
    outline: none;
    border: none;
  }

  ul, ol, li {
    list-style: none;
  }
`;
