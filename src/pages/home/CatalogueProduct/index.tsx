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
      <img src={img} alt={title} />
      <article>
        <h2>{title}</h2>
        <span className="catalogue-product__price">{price}</span>
        <span className="catalogue-product__category">{category}</span>
      </article>
    </CatalogueProductStyled>
  );
}