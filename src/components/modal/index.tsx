import { ModalStyled, ModalWrapperStyled } from "./styles";
import closeIcon from "../../assets/img/icons/close.svg";

export function Modal() {
  return (
    <ModalWrapperStyled>
      <ModalStyled>
        <header>
          <h2>Carrinho de compras</h2>
          <button>
            <img src={closeIcon} alt="ícone de fechamento" title="ícone de x" />
          </button>
        </header>
        <article>

        </article>
      </ModalStyled>
    </ModalWrapperStyled>
  );
}