import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalWrapperStyled = styled.div`
  align-items: center;
  background-color: rgba(51, 51, 51, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 1;
  `

export const ModalStyled = styled.article`
  background-color: ${({theme : iTheme}) => theme.colors.grey[4]};
  border-radius: ${({theme : iTheme}) => theme.radius};
  max-width: 500px;
  overflow: hidden;
  width: 100%;

  header {
    align-items: center;
    background-color: ${({theme : iTheme}) => theme.colors.primary[0]};
    display: flex;
    justify-content: space-between;
    padding: 20px;

    button {
      height: 14px;
    }
  }

  h2 {
    color: ${({theme : iTheme}) => theme.colors.grey[4]};
    font-size: 16px;
    font-weight: 700;
  }
  
  & > article {
    min-height: 300px;
    max-height: 600px;
    height: 100%;
    overflow-y: auto;
  }
`