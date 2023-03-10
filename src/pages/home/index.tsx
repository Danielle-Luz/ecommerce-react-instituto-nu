import { useState } from "react";
import { Header } from "../../components/header";
import { Modal } from "../../components/modal";
import { Catalogue } from "./Catalogue";
import { CatalogueWrapperStyled } from "./styles";

export function Home() {
  const [togglemodal, setToggleModal] = useState(false);

  return (
    <>
      {togglemodal && <Modal setToggleModal={setToggleModal} />}
      <Header setToggleModal={setToggleModal} />
      <CatalogueWrapperStyled>
        <Catalogue />
      </CatalogueWrapperStyled>
    </>
  );
}
