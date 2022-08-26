import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    height: 100vh;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }
`