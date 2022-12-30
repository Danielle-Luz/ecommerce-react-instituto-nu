import { iCatalogueProduct } from "../../../database/iCatalogueProduct";
import { CatalogueProductStyled } from "./styles";


export function CatalogueProduct ({id, img, title, price, category} : iCatalogueProduct) {
  return (
    <CatalogueProductStyled>
      <div>
        <img src={img} alt={title} />
      </div>
      <article>
        <h2>{title}</h2>
        <span className="catalogue-product__price">{price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</span>
        <span className="catalogue-product__category">{category}</span>
        <button>Adicionar</button>
      </article>
    </CatalogueProductStyled>
  );
}