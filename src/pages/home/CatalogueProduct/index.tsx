import { iCatalogueProduct } from "../../../database/iCatalogueProduct";
import { CatalogueProductStyled } from "./styles";


export function CatalogueProduct ({img, title, price, category} : iCatalogueProduct) {
  return (
    <CatalogueProductStyled>
      <img src={img} alt={title} />
      <article>
        <h2>{title}</h2>
        <span className="catalogue-product__price">{price}</span>
        <span className="catalogue-product__category">{category}</span>
      </article>
    </CatalogueProductStyled>
  );
}