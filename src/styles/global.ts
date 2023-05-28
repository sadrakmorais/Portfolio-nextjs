import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
      --p-font-size: clamp(0.8rem, 0.8vw + 0.2rem, 1rem);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
  }

 
  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }


  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    overflow:hidden !important;
    overflow-y: auto !important;
  }

  main{
    background-color: #202731;
    height: 100vh;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  h1,h2,span,p,a{
    color: #fff;
  }
  a{
    text-decoration: none;
  }

  h1,h2,button,b{
    font-family: var(--Raleway),sans-serif;
  }
  span,p,a{
    font-family: var(--Montserrat),sans-serif;
    
  }

  #container-global{
    width: 100%;
    max-width: 1440px;
    padding: 0 3rem;

    @media (max-width: 750px) {
      padding: 0 2rem;
    
     }
       @media (max-width: 450px) {
        padding: 0 1rem;
       }
  }

  
`;
