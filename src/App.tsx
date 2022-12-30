import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { ProductProvider } from "./providers/ProductProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ProductProvider>
          <Home />
        </ProductProvider>
      </ThemeProvider>
    </>
  );
}