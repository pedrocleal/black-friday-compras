import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #111927;
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }
`