import { useContext } from "react";
import { ContextProducts } from "../context/ContextProducts";

export const useFilterSingle = (id: number) => {
  const productsContext = useContext(ContextProducts);

  // Si no hay contexto, retorna null
  if (!productsContext) {
    return null;
  }

  const { products } = productsContext;

  const productFiltered = products.find((product) => product.id === id);

  return productFiltered;
};
