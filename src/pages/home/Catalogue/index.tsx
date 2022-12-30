import { products } from "../../../database/products";
import { CatalogueProduct } from "../CatalogueProduct";
import { CatalogueStyled } from "./styles";

export function Catalogue () {
  return (
    <CatalogueStyled>
      {
        products.map( ({id, img, title, price, category}) => {
          return <CatalogueProduct key={id} id={id} img={img} title={title} price={price} category={category} />
        })
      }
    </CatalogueStyled>
  );
}