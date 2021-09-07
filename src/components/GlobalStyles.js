import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width:0.5rem
    }
    &::-webkit-scrollbar-thumb {
    background-color: darkgray;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
}

body{
    background: #0c0c0c;
    color: white;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    }
    h2{
    font-size: 2rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    padding: 2rem 0rem;
    color: #66cae9b8
}
h3 {
    padding: 2rem 0rem;
  }
  p {
      font-size: 1.2rem;
      line-height: 200%
  }
  a{
      text-decoration: none;
      color: white;
  }
  img{
    display:block;
  }
`;

export default GlobalStyle;
