import { iCatalogueProduct } from "../../../database/iCatalogueProduct";
import { CartProductStyled } from "./styles";

interface iCartProductProps {
  product : iCatalogueProduct;
}

export function CartProduct ({product} : iCartProductProps) {
  return (
    <CartProductStyled>
      
    </CartProductStyled>
  );
}