import styled from "styled-components";

export const CatalogueStyled = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(100px, 300px));
  list-style-type: none;
  padding: 20px;
`