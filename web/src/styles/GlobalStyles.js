<<<<<<< HEAD
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
            background-color: #fff;
        }
    }

    footer{
        >img{
            width: 100%;
        }
    }

=======
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
            background-color: black;
        }
    }

    footer{
        >img{
            width: 100%;
        }
    }

>>>>>>> be602db92f28272861b4a645c326e98488f345f8
`