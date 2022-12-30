import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const CatalogueProductStyled = styled.li`
  border: 1px solid ${({theme : iTheme}) => theme.colors.grey[2]};

  div {
    img {
      height: 150px;
      width: 100%;
    }

    background-color: ${({theme : iTheme}) => theme.colors.grey[4]};
    width: 100%;
  }

  h2 {
    color: ${({theme : iTheme}) => theme.colors.grey[0]};
    font-size: 18px;
    font-weight: 700;
  }

  .catalogue-product__price {
    color: ${({theme : iTheme}) => theme.colors.primary[0]};
    font-size: 15px;
    font-weight: 600;
  }
  
  .catalogue-product__category {
    color: ${({theme : iTheme}) => theme.colors.grey[1]};
    font-size: 14px;
    font-weight: 400;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
`