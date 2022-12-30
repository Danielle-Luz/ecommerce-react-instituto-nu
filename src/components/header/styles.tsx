import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderStyled = styled.header`
  background-color: ${({theme : iTheme}) => theme.colors.grey[4]};
  padding: 28px 0;

  h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`