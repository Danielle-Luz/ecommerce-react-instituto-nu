import { Header } from "../../components/header";
import { Catalogue } from "./Catalogue";
import { CatalogueWrapperStyled } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <CatalogueWrapperStyled>
        <Catalogue />
      </CatalogueWrapperStyled>
    </>
  );
}
