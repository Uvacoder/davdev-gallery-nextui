import css from 'styled-jsx/css'

export const globals = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }
`

export default css`
  main {
    background: #222;
    min-height: 100vh;
  }

  h1 {
    font-weight: 700;
  }
`
