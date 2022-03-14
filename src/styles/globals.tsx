import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   overflow-y: hidden;
   overflow-x: hidden;
 }

 html,
 body {
  background: #101010;
  font-family:"Poppins", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
 }

 html{
  font-size: 62.5%; // 10px

  @media (max-width: 600px) {
   overflow-y: visible;
  }

 }

 button{
  cursor: pointer;
}

 a {
   color: inherit;
   text-decoration: none;
 }
 
`;
export default GlobalStyle;
