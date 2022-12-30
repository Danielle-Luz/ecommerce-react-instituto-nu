import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderStyled = styled.header`
  background-color: ${({theme : iTheme}) => theme.colors.grey[4]};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding: 28px 0;
  position: sticky;
  top: 0;

  h1 {
    color: ${({theme : iTheme}) => theme.colors.grey[0]};
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`