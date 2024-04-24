import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline:0;
    font-family: "Roboto", sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility !important;

    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  h1,h2,h3,h4,strong{
    font-weight: 500;
  }

  a{
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

 
`;
