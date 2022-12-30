import { createContext, useEffect, useState } from "react";
import { iCatalogueProduct } from "../database/iCatalogueProduct";

interface iCartProduct extends iCatalogueProduct {
  quantity : number;
}

interface iProductProviderValues {
  removeProduct(removedProductId: number) : void;
  addProduct(addedProduct: iCatalogueProduct): void;
  cart : iCartProduct[];
}

interface iProductProviderProps {
  children : React.ReactNode;
}

export const ProductContext = createContext({} as iProductProviderValues);

export function ProductProvider ({children} : iProductProviderProps) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") as string) as iCartProduct[] || []);

  function removeProduct (removedProductId : number) {
    const cartWithoutRemovedProduct = cart.filter( cartProduct => {
      return cartProduct.id !== removedProductId;
    })

    setCart(cartWithoutRemovedProduct);

    localStorage.setItem("cart", JSON.stringify(cartWithoutRemovedProduct));
  }

  function addProduct (addedProduct : iCatalogueProduct) {
    let newCart = [...cart];

    const foundProductIndex = newCart.findIndex(cartProduct => {
      return cartProduct.id === addedProduct.id;
    })

    const productNotFound = -1;

    if (foundProductIndex === productNotFound) {
      newCart = [...newCart, {...addedProduct, quantity: 1}];
      setCart(newCart);
    } else {
      newCart[foundProductIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <ProductContext.Provider value={{removeProduct, addProduct, cart}}>
      {children}
    </ProductContext.Provider>
  );
}