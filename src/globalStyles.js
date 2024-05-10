import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        outline: none;
    }

    *{
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle