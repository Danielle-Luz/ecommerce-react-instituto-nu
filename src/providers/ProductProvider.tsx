import { createContext, useEffect, useState } from "react";
import { iCatalogueProduct } from "../database/iCatalogueProduct";

export interface iCartProduct extends iCatalogueProduct {
  quantity: number;
}

interface iProductProviderValues {
  removeProduct(removedProductId: number): void;
  addProduct(addedProduct: iCatalogueProduct): void;
  reduceProductQuantity(reducedProductId: number): void;
  cart: iCartProduct[];
}

interface iProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as iProductProviderValues);

export function ProductProvider({ children }: iProductProviderProps) {
  const [cart, setCart] = useState(
    (JSON.parse(localStorage.getItem("cart") as string) as iCartProduct[]) || []
  );

  function reduceProductQuantity(reducedProductId: number) {
    const newCart = [...cart];
    const reducedProductIndex = newCart.findIndex(
      (cartProduct) => cartProduct.id === reducedProductId
    );

    if (newCart[reducedProductIndex].quantity > 1) {
      newCart[reducedProductIndex].quantity -= 1;
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  }

  function removeProduct(removedProductId: number) {
    const cartWithoutRemovedProduct = cart.filter((cartProduct) => {
      return cartProduct.id !== removedProductId;
    });

    setCart(cartWithoutRemovedProduct);

    localStorage.setItem("cart", JSON.stringify(cartWithoutRemovedProduct));
  }

  function addProduct(addedProduct: iCatalogueProduct) {
    let newCart = [...cart];

    const foundProductIndex = newCart.findIndex((cartProduct) => {
      return cartProduct.id === addedProduct.id;
    });

    const productNotFound = -1;

    if (foundProductIndex === productNotFound) {
      newCart = [...newCart, { ...addedProduct, quantity: 1 }];
    } else {
      newCart[foundProductIndex].quantity += 1;
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <ProductContext.Provider
      value={{ removeProduct, addProduct, reduceProductQuantity, cart }}
    >
      {children}
    </ProductContext.Provider>
  );
}
