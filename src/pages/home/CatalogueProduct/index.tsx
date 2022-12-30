import { CatalogueProductStyled } from "./styles";

interface iCatalogueProductProps {
  img : string;
  title : string;
  price : number;
  category : string;
}

export function CatalogueProduct ({img, title, price, category} : iCatalogueProductProps) {
  return (
    <CatalogueProductStyled>

    </CatalogueProductStyled>
  );
}