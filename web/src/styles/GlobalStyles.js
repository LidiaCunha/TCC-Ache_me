import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }

    body {
        background: #292929;

        @media (min-width: 781px){
            height: 100vh;
        }
    }

    footer{
        >img{
            width: 100%;
        }
    }

`