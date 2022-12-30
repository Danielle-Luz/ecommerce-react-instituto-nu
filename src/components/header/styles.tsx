import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderStyled = styled.header`
  background-color: ${({theme : iTheme}) => theme.colors.grey[4]};
  padding: 28px 0;
  
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`