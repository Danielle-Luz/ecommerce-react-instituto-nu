import hamburguer from "../assets/img/catalogo/hamburguer.svg";
import bigBurguer from "../assets/img/catalogo/big-burguer.svg";
import xBurguer from "../assets/img/catalogo/x-burguer.svg";
import comboBurguer from "../assets/img/catalogo/combo-burguer.svg";
import cocaCola from "../assets/img/catalogo/coca-cola.svg";
import fantaGuarana from "../assets/img/catalogo/fanta-guarana.svg";
import milkshakeChocolate from "../assets/img/catalogo/milkshake-chocolate.svg";
import milkshakeOvomaltine from "../assets/img/catalogo/milkshake-chocolate.svg";
import { iCatalogueProduct } from "./iCatalogueProduct";

export const products : iCatalogueProduct[] = [
  {
    id: 1,
    img: hamburguer,
    title: "Hamburguer",
    category: "Sanduíche",
    price: 8.50    
  },
  {
    id: 2,
    img: bigBurguer,
    title: "Big Burguer",
    category: "Sanduíche",
    price: 10.70    
  },
  {
    id: 3,
    img: xBurguer,
    title: "X-Burguer",
    category: "Sanduíche",
    price: 11.90    
  },
  {
    id: 4,
    img: comboBurguer,
    title: "Combo Burguer",
    category: "Sanduíche",
    price: 15.95    
  },
  {
    id: 5,
    img: cocaCola,
    title: "Coca-Cola",
    category: "Bebida",
    price: 5.60    
  },
  {
    id: 6,
    img: fantaGuarana,
    title: "Fanta Guaraná",
    category: "Bebida",
    price: 5.60    
  },
  {
    id: 7,
    img: milkshakeChocolate,
    title: "Milkshake Chocolate",
    category: "Bebida",
    price: 7.84    
  },
  {
    id: 8,
    img: milkshakeOvomaltine,
    title: "Milkshake Ovomaltine",
    category: "Bebida",
    price: 7.80    
  },
];