import { ContainerStyled } from "../../styles/ContainerStyled";
import { HeaderStyled } from "./styles";
import cartIcon from "../../assets/img/icons/cart.svg";

export function Header () {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <h1>BurguerQueen</h1>
        <button>
          <img src={cartIcon} alt="ícone de carrinho de compras" title="botão de carrinho" />
        </button>
      </ContainerStyled>
    </HeaderStyled>
  );
}