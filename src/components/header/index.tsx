import { ContainerStyled } from "../../styles/ContainerStyled";
import { HeaderStyled } from "./styles";
import cartIcon from "../../assets/img/icons/cart.svg";

interface iHeaderProps {
  setToggleModal : React.Dispatch<React.SetStateAction<boolean>>;
}  

export function Header ({setToggleModal} : iHeaderProps) {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <h1>BurguerQueen</h1>
        <button onClick={() => setToggleModal(true)}>
          <img src={cartIcon} alt="ícone de carrinho de compras" title="botão de carrinho" />
        </button>
      </ContainerStyled>
    </HeaderStyled>
  );
}