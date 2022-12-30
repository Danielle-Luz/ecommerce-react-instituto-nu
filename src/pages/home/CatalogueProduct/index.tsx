import { useContext } from "react";
import { iCatalogueProduct } from "../../../database/iCatalogueProduct";
import { ProductContext } from "../../../providers/ProductProvider";
import { CatalogueProductStyled } from "./styles";


export function CatalogueProduct (product : iCatalogueProduct) {
  const {addProduct} = useContext(ProductContext);

  return (
    <CatalogueProductStyled>
      <div>
        <img src={product.img} alt={product.title} />
      </div>
      <article>
        <h2>{product.title}</h2>
        <span className="catalogue-product__price">{product.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</span>
        <span className="catalogue-product__category">{product.category}</span>
        <button onClick={() => addProduct(product)}>Adicionar</button>
      </article>
    </CatalogueProductStyled>
  );
}