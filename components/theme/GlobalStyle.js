import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Ubuntu, ';
    src: url();
}
html {
    scroll-behavior: smooth;
    flex-flow: column; 
    align-items: center; 
    display: flex; 
}
body {
    font-family: 'Ubuntu', sans-serif;
    width: 100vw;
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
    font-weight: 400; 
    line-height: 22px;
    margin: 0;
}

 p {
    margin: 0; 
    font-weight: 400;
    line-height: 28px;
 }
`

export default GlobalStyle
