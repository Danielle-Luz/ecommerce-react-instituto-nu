import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CartProductStyled = styled.li`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
    align-items: stretch;
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .modal__img-wrapper {
    background-color: ${({ theme: iTheme }) => theme.colors.grey[3]};
    border-radius: ${({ theme: iTheme }) => theme.radius};
    max-width: 100px;
    width: 100%;

    img {
      max-height: 80px;
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }

  .modal__info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    max-width: 130px;
    width: 100%;

    h3 {
      color: ${({ theme: iTheme }) => theme.colors.grey[0]};
      font-size: 14px;
      font-weight: 700;
    }

    & > span {
      color: ${({ theme: iTheme }) => theme.colors.primary[0]};
      font-size: 12px;
      font-weight: 600;
    }
  }

  .modal__buttons {
    align-items: center;
    background-color: ${({ theme: iTheme }) => theme.colors.grey[3]};
    border-radius: ${({ theme: iTheme }) => theme.radius};
    display: flex;
    justify-content: space-between;
    max-width: 100px;
    width: 100%;

    button {
      color: ${({ theme: iTheme }) => theme.colors.secondary[0]};
      font-size: 22px;
      padding: 0 10px;
    }

    span {
      background-color: ${({ theme: iTheme }) => theme.colors.grey[4]};
      font-size: 12px;
      padding: 2px 15px;
    }
  }
`;
