import { ModalStyled, ModalWrapperStyled } from "./styles";
import closeIcon from "../../assets/img/icons/close.svg";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { CartProduct } from "./CartProduct";

interface iModalProps {
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setToggleModal }: iModalProps) {
  const { cart } = useContext(ProductContext);

  return (
    <ModalWrapperStyled>
      <ModalStyled>
        <header>
          <h2>Carrinho de compras</h2>
          <button onClick={() => setToggleModal(false)}>
            <img src={closeIcon} alt="ícone de fechamento" title="ícone de x" />
          </button>
        </header>
        <article className="modal__content">
          {cart?.length === 0 ? (
            <div className="modal__empty-message">
              <div>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </div>
            </div>
          ) : (
            <ul>
              {cart.map((cartProduct) => (
                <CartProduct key={cartProduct.id} product={cartProduct} />
              ))}
            </ul>
          )}
        </article>
        {cart?.length !== 0 && (
          <article className="modal__total">
            <h3>Total</h3>
            <span>
              {cart
                .reduce((total, {price, quantity}) => (total += price * quantity), 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </article>
        )}
      </ModalStyled>
    </ModalWrapperStyled>
  );
}
