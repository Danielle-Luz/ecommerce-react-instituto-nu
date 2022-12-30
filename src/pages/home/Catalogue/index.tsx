import { products } from "../../../database/products";
import { CatalogueProduct } from "../CatalogueProduct";
import { CatalogueStyled } from "./styles";

export function Catalogue () {
  return (
    <CatalogueStyled>
      {
        products.map( ({img, title, price, category}) => {
          return <CatalogueProduct img={img} title={title} price={price} category={category} />
        })
      }
    </CatalogueStyled>
  );
}