import { iCartProduct } from "../../../providers/ProductProvider";
import { CartProductStyled } from "./styles";
import trashIcon from "../../../assets/img/icons/trash.svg";

interface iCartProductProps {
  product: iCartProduct;
}

export function CartProduct({ product }: iCartProductProps) {
  return (
    <CartProductStyled>
      <div>
        <div className="modal__img-wrapper">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="modal__info">
          <h3>{product.title}</h3>
          <div className="modal__buttons">
            <button>-</button>
            <span>{product.quantity}</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <button>
        <img src={trashIcon} alt="ícone de lixeira" title="botão de excluir" />
      </button>
    </CartProductStyled>
  );
}
