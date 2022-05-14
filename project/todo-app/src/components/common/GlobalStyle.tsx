import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
  }

  li {
    list-style: none;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }
`;

export const theme = {
  indigo: {
    0: "#edf2ff",
    1: "#dbe4ff",
    2: "#bac8ff",
    4: "#748ffc",
  },
};

export default GlobalStyle;
