"use client"
import React from "react";
import useFilter from "../../hooks/useFilter";
import Card from "../../components/reutilizableComponents/card/Card";
import { usePathname } from "next/navigation";

// export async function generateStaticParams() {
//   // Lista de categorías para las que deseas generar rutas estáticas
//   const categories = ["fragrances", "mens", "womens", "sports", "vehicles"];

//   // Devuelve un array de objetos que representa los parámetros de las rutas
//   return categories.map((category) => ({
//     category, // Esto generará rutas como /products/fragrances, /products/mens, etc.
//   }));
// }

export default function CategoryPage() {
  const pathName = usePathname()
  const category = pathName.split("/")[2] as "fragrances" | "mens" | "womens" | "sports" | "vehicles" | "";
  console.log(category)

  // Tipeo explícito del array de productos
  const productsFiltered = useFilter({ categoryString:category });

  if (!productsFiltered) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <h1 className="text-xl font-semibold">Productos</h1>
      <section className="flex flex-wrap justify-center items-center gap-8">
        {productsFiltered.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}
