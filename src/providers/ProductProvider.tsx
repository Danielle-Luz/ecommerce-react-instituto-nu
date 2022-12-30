import { createContext, useEffect, useState } from "react";
import { iCatalogueProduct } from "../database/iCatalogueProduct";

interface iCartProduct extends iCatalogueProduct {
  quantity : number;
}

export const ProductContext = createContext();

export function ProductProvider () {
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
  }

  function addProduct (addedProduct : iCartProduct) {
    const foundProductIndex = cart.findIndex(cartProduct => {
      return cartProduct.id === addedProduct.id;
    })

    const productNotFound = -1;

    if (foundProductIndex === productNotFound) {
      setCart([...cart, addedProduct]);
    } else {
      cart[foundProductIndex].quantity += 1;
    }
  }

  return (
    <ProductContext.Provider>

    </ProductContext.Provider>
  );
}