import styled from "styled-components";

export const CatalogueStyled = styled.ul`
  display: grid;
  gap: 20px;
  list-style-type: none;
  padding: 20px;
  grid-template-columns: repeat(1, minmax(100px, 300px));

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(100px, 300px));
  }

  @media (min-width: 680px) {
    grid-template-columns: repeat(3, minmax(100px, 300px));
  }
`