import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: ${({theme : iTheme}) => theme.radius};
  }
`