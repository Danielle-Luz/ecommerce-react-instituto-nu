import {
  iCartProduct,
  ProductContext,
} from "../../../providers/ProductProvider";
import { CartProductStyled } from "./styles";
import { useContext } from "react";
import trashIcon from "../../../assets/img/icons/trash.svg";

interface iCartProductProps {
  product: iCartProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  const { addProduct, removeProduct, reduceProductQuantity } =
    useContext(ProductContext);

  return (
    <CartProductStyled>
      <div>
        <div className="modal__img-wrapper">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="modal__info">
          <h3>{product.title}</h3>
          <div className="modal__buttons">
            <button onClick={() => reduceProductQuantity(product.id)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => addProduct(product)}>+</button>
          </div>
        </div>
      </div>
      <button onClick={() => removeProduct(product.id)}>
        <img src={trashIcon} alt="ícone de lixeira" title="botão de excluir" />
      </button>
    </CartProductStyled>
  );
}
