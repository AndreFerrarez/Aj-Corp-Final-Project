import { createGlobalStyle } from 'styled-components'
import React from 'react'


const GlobalStyle = createGlobalStyle`
  * {
    margim: 0;
    padding: 0;
    box-sizing: border-box;
  },
  
  body {
    width: 100vw;
    height: 100vh;
    backgroung-color: 'green';
    font-family: Arial, Helvetica, sans-serif;
  }
`;


export default GlobalStyle;