import { useContext } from "react";
import { ContextProducts } from "../context/ContextProducts";
import useFilterComponent from "./useSecondFilter";
import { Products } from "../utils/types";
import { useProducts } from "./useContextProducts";
import useSecondFilter from "./useSecondFilter";

interface UseFilterProp {
  filterBy:
    | "categoryGeneral"
    | "categorySingle"
    | "id"
    | "rating"
    | "price"
    | "search"
    | "offer";

  filterProp: string | number;
  filterComponentProp: [string, number, number];
}

const useFilter = ({
  filterBy,
  filterProp,
  filterComponentProp,
}: UseFilterProp) => {
  // Accede al contexto de los productos
  const { products } = useProducts();

  let productsFiltered: Products[] = []; // Define como un array vacío inicialmente

  const [subCategory = "", rating = 0, price = 0] = filterComponentProp || [
    "",
    0,
    0,
  ];

  // Filtro según necesidad
  switch (filterBy) {
    case "categoryGeneral":
      if (filterProp === "all") {
        productsFiltered = products; // Retorna todos los productos
      } else {
        // Filtra los productos por categoría general
        productsFiltered = products.filter((product) => {
          if (typeof filterProp === "string") {
            if (filterProp === "mens") {
              return product.category.match(/^men(-\w+)?/);
            } else {
              return product.category.includes(filterProp);
            }
          }
          return false;
        });
      }
      break;

    case "categorySingle":
      // Filtra los productos por categoría específica
      if (typeof filterProp === "string") {
        productsFiltered = products.filter((product) => {
          product.category === filterProp;
        });
      }
      break;

    case "id":
      if (typeof filterProp === "number") {
        const foundProduct = products.find(
          (product) => product.id === filterProp
        );
        // Si encuentra un producto, lo convierte en un array
        productsFiltered = foundProduct ? [foundProduct] : [];
      }
      break; // Sale del switch

    case "rating":
      if (typeof filterProp === "number") {
        const ratingRounded = Math.round(filterProp);
        productsFiltered = products.filter((product) => {
          return product.rating <= ratingRounded;
        });
      }
      break; // Sale del switch

    case "price":
      if (typeof filterProp === "number") {
        productsFiltered = products.filter((product) => {
          return product.price <= filterProp;
        });
      }
      break; // Sale del switch

    case "search":
      if (typeof filterProp === "string") {
        productsFiltered = products.filter((product) => {
          return product.title
            .toLocaleLowerCase()
            .includes(filterProp.toLocaleLowerCase());
        });
      }

      case "offer":
        if (typeof filterProp === "number") {
          productsFiltered = products.filter((product) => {
            return product.discountPercentage > filterProp;
          });
        }
  }

  // Llamamos al hook siempre con un array
  const productsSubFiltered = useSecondFilter({
    productsFiltered: productsFiltered, // Asegúrate de pasar siempre un array
    subCategory: subCategory,
    rating: rating,
    price: price,
  });

  return productsSubFiltered; // Retorna los productos filtrados
};

export default useFilter;
