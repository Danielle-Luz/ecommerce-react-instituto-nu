import { createContext, useEffect, useState } from "react";
import { iCatalogueProduct } from "../database/iCatalogueProduct";

interface iCartProduct extends iCatalogueProduct {
  quantity : number;
}

interface iProductProviderValues {
  removeProduct(removedProductId: number) : void;
  addProduct(addedProduct: iCartProduct) : void;
  cart : iCartProduct[];
}

interface iProductProviderProps {
  children : React.ReactNode;
}

export const ProductContext = createContext({} as iProductProviderValues);

export function ProductProvider ({children} : iProductProviderProps) {
  useEffect(() => {
    if(!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") as string) as iCartProduct[]);

  function removeProduct (removedProductId : number) {
    const cartWithoutRemovedProduct = cart.filter( cartProduct => {
      return cartProduct.id !== removedProductId;
    })

    setCart(cartWithoutRemovedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function addProduct (addedProduct : iCartProduct) {
    const foundProductIndex = cart.findIndex(cartProduct => {
      return cartProduct.id === addedProduct.id;
    })

    const productNotFound = -1;

    if (foundProductIndex === productNotFound) {
      setCart([...cart, addedProduct]);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart[foundProductIndex].quantity += 1;
    }
  }

  return (
    <ProductContext.Provider value={{removeProduct, addProduct, cart}}>
      {children}
    </ProductContext.Provider>
  );
}