import  { useContext } from "react";
import { ContextProducts } from "../context/ContextProducts";

//TODO:arreglar filtrado de womens y mens, agregar test

interface UseFilterProp {
  filterBy: "categoryGeneral" | "categorySingle" | "id" | "rating" | "price";
  filterProp:
    | "fragrances"
    | "mens"
    | "womens"
    | "sports"
    | "vehicle"
    | "all"
    | "mens-shirts"
    | "mens-shoes"
    | "mens-watches"
    | "sports-accessories"
    | "womens-bags"
    | "womens-dresses"
    | "womens-jewellery"
    | "womens-shoes"
    | "womens-watches"
    | "vehicle"
    | number;
    filterComponentProp:(string | number)[]
}

const useFilter = ({ filterBy, filterProp,filterComponentProp }: UseFilterProp) => {
  // Obtiene todos los productos del contexto
  const productsContext = useContext(ContextProducts);

  //desestructura los valores elegidos en el filtro
  const [subCategory,rating,price] = filterComponentProp

  // Si no hay contexto, retorna null
  if (!productsContext) {
    return null;
  }

  const { products } = productsContext;

  let productsFiltered;

  //filtro segun necesidad
  switch (filterBy) {
    case "categoryGeneral":
      if (filterProp === "all") {
        return products;
      }

      // Filtra los productos por categoría general
      productsFiltered = products.filter((product) => {
        if (typeof filterProp === "string") {
          if (filterProp === "mens") {
            return product.category.match(/^men(-\w+)?/);
          } else {
            return product.category.includes(filterProp);
          }
        }
      });

      return productsFiltered;
      break;

    case "categorySingle":
      // Filtra los productos por categoría especifica
      if (typeof filterProp === "string") {
        productsFiltered = products.filter((product) => {
          if (filterProp) {
            return product.category.includes(filterProp);
          }
        });

        return productsFiltered;
      }

      break;

    case "id":
      if (typeof filterProp === "number") {
        productsFiltered = products.find((product) => {
          product.id === filterProp || null;
        });
        return productsFiltered;
      }

      break;

    case "rating":
      if (typeof filterProp === "number") {
        const ratingRounded = Math.round(filterProp);
        productsFiltered = products.filter((product) => {
          product.rating <= ratingRounded;
        });

        return productsFiltered;
      }

      break;

    case "price":
      if (typeof filterProp === "number") {
        productsFiltered = products.filter((products) => {
          products.price <= filterProp;
        });

        return productsFiltered;
      }
      break;
  }
};

export default useFilter;
