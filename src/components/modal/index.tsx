import { ModalStyled, ModalWrapperStyled } from "./styles";
import closeIcon from "../../assets/img/icons/close.svg";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductProvider";
import { CartProduct } from "./CartProduct";

interface iModalProps {
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({setToggleModal} : iModalProps) {
  const {cart} = useContext(ProductContext);

  return (
    <ModalWrapperStyled>
      <ModalStyled>
        <header>
          <h2>Carrinho de compras</h2>
          <button onClick={() => setToggleModal(false)}>
            <img src={closeIcon} alt="ícone de fechamento" title="ícone de x" />
          </button>
        </header>
        <article>
          {
            cart?.length === 0 ?
            (
              <div className="modal__empty-message">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </div>
            )
            :
            <ul>
              {cart.map( cartProduct => <CartProduct product={cartProduct} />)}
            </ul>
          }
        </article>
      </ModalStyled>
    </ModalWrapperStyled>
  );
}