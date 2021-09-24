import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
    display: flex; 
    flex-flow: column; 
    align-items: center; 
    
}
body {
    font-family: 'Ubuntu', sans-serif;
    max-width: 1140px; 
    background-color: #F2F6FF;
    margin: 0; 
}
h1 {
    font-size: 46px;
    font-weight: medium; 
    line-height: 54px;
}
h2 {
    font-size: 36px;
    font-weight: medium; 
    line-height: 42px;
}
h3 {
    font-size: 28px;
    font-weight: medium; 
    line-height: 32px;
}
h4 {
    font-size: 22px;
    font-weight: medium; 
    line-height: 26px;
}
h5 {
    font-size: 18px;
    font-weight: medium; 
    line-height: 22px;
}

 p {
    margin: 0; 
 }
`

export default GlobalStyle
