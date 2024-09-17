"use client"
import { createContext, useState, useEffect, ReactNode } from "react";
import { ContextProductstype,Products } from "../utils/types";

export const ContextProducts = createContext<ContextProductstype | undefined>(undefined);

interface ProductsProviderProps{
  children:ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const categoryList:string[] = [
    "beauty",
    "fragrances",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sports-accessories",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const responses = await Promise.all(
            categoryList.map(async (category) => {
              const response = await fetch(
                `https://dummyjson.com/products/category/${category}`
              );
              return response.json();
            })
          );

        const allProducts = responses.flatMap((response) => response.products);
        setProducts(allProducts);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ContextProducts.Provider value={{ products, loading, error }}>
      {children}
    </ContextProducts.Provider>
  );
}
