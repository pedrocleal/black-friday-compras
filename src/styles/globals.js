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
    height: 100vh;
    background: #6190e8; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6190e8, #a7bfe8); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6190e8, #a7bfe8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  button {
    cursor: pointer
  }

  a {
    text-decoration: none;
  }
`