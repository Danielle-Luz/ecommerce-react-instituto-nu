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

    h2 {
      color: ${({theme : iTheme}) => theme.colors.grey[4]};
      font-size: 16px;
      font-weight: 700;
    }

    button {
      height: 14px;
    }
  }

  .modal__content {
    display: flex;
    min-height: 150px;

    .modal__empty-message {
      align-items: center;
      display: flex;
      min-height: 100%;
      justify-content: center;
      text-align: center;
      width: 100%;
      
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      h3 {
        color: ${({theme : iTheme}) => theme.colors.grey[0]};
        font-size: 16px;
        font-weight: 700;
      }

      p {
        color: ${({theme : iTheme}) => theme.colors.grey[1]};
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  ul {
    border-bottom: 2px solid ${({theme : iTheme}) => theme.colors.grey[3]};
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-height: 400px;
    height: 100%;
    overflow-y: auto;
    padding: 20px 0;
    padding-right: 20px;
    margin: 0 20px;
    width: 100%;
  }

  .modal__total {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    max-width: 100%;

    h3 {
      color: ${({theme : iTheme}) => theme.colors.grey[0]};
      font-size: 14px;
      font-weight: 600;
    }

    span {
      color: ${({theme : iTheme}) => theme.colors.grey[1]};
      font-size: 14px;
      font-weight: 600;
    }
  }
`