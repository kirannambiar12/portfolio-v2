import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html, body {
    background-color: #111111;
    color: white;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bakbak One', cursive;
  }

  h3 {
    font-size: 40px;
  }

  .mx-auto {
    margin: auto;
  }

  .d-block {
    display: block;
  }

  .d-flex {
    display: flex;
  }

  .mt-2 {
    margin-top: 20px;
  }

`;

export default GlobalStyle;
