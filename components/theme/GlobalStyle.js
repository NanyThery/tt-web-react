import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Ubuntu, ';
    src: url();
}
* {
    box-sizing: border-box ;
}
a {
    color: #9D4EDD;
}
html {
    scroll-behavior: smooth;
    flex-flow: column; 
    align-items: center; 
    display: flex; 
}
body {
    
    font-family: 'Ubuntu', sans-serif;
    width: 100%;
    background-color: #F2F6FF;
    margin: 0; 

}
h1 {
    font-size: 46px;
    font-weight: 500; 
    line-height: 54px;
    margin: 0;
}
h2 {
    font-size: 36px;
    font-weight: 400; 
    line-height: 42px;
    margin: 0;

    @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
}
h3 {
    font-size: 28px;
    font-weight: 400; 
    line-height: 32px;
    margin: 0;
}
h4 {
    font-size: 22px;
    font-weight: 400; 
    line-height: 26px;
    margin: 0;
}
h5 {
    font-size: 18px;
    line-height: 22px;
    margin: 0;
}

 p {
    margin: 0; 
    font-weight: 400;
    line-height: 28px;
 }

 .bold {
  font-weight: bold;
}

.no-wrap {
  white-space: nowrap;
}

.color-emphasys {
  color: #ff7c04;
}

strong {
  font-weight: 500;
}
`;

export default GlobalStyle;
