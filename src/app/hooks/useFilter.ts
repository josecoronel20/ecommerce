import React, { useContext } from "react";
import { ContextProducts } from "../context/ContextProducts";
import { Products } from "../utils/types";

//TODO:arreglar filtrado de womens y mens, agregar test

interface UseFilterProp {
  categoryString: "fragrances" | "mens" | "womens" | "sports" | "vehicle" | "";
}

const useFilter = ({ categoryString }: UseFilterProp): Products[] | null => {
  // Obtiene todos los productos del contexto
  const productsContext = useContext(ContextProducts);

  // Si no hay contexto, retorna null
  if (!productsContext) {
    return null;
  }

  const { products } = productsContext;

  // Si la categoría es vacía, devuelve todos los productos
  if (categoryString === "") {
    return products;
  }

  // Filtra los productos por categoría
  const productsFiltered = products.filter((product) =>
    
    product.category.includes(categoryString) );

  // Retorna el array filtrado (puede ser vacío, pero no null)
  return productsFiltered;
};

export default useFilter;
