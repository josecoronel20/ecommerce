"use client"
import { createContext, useState, useEffect } from "react";

export const ContextProducts = createContext();

export function ProductsProvider({ children }) {
  const categoryList = [
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

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (error) {
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
