import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 html,
 body {
  background: #101010;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
 }

 button{
  cursor: pointer;
}

 a {
   color: inherit;
   text-decoration: none;
 }

 * {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   overflow-y: hidden;
   overflow-x: hidden;
 };


 @media (max-width: 600px) {
  html{
   overflow-y: visible;
 }

}
`;
export default GlobalStyle;
