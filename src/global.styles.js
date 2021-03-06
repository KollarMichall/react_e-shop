import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
        padding: 10px
    }
}
a {
    text-decoration: none;
    color: black;
}
`