import css from 'styled-jsx/css'

export const globals = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }
`

export default css`
  main {
    background: linear-gradient(to right, #6441a5, #2a0845);
    min-height: 100vh;
  }

  h1 {
    font-weight: 700;
  }
`
