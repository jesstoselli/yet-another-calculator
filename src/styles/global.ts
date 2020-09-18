import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #1D2D50;
    color: #F9F9F9;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body, input, button {
    font: 16px "Poppins", sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 400;
}

button {
    cursor: pointer;
    outline: 0;
}

a {
  text-decoration: none;
}

/* #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px
} */

`;
