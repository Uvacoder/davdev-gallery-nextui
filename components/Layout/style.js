import css from "styled-jsx/css";

export const globals = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default css`
  main {
    background-color: black;
    min-height: 100vh;
  }
`;
