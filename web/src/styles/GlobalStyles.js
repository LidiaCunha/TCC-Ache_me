import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }

    body {

        @media (min-width: 781px){
            min-height: 100vh;
            padding: auto;
            box-sizing: border-box;
            overflow-x: hidden;
            
        }
    }

    footer{
        >img{
            width: 100%;
        }
    }

`