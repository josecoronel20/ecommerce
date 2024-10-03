"use client"
import React from "react";
import useFilter from "../../hooks/useFilter";
import Card from "../../components/reutilizableComponents/card/Card";
import { usePathname } from "next/navigation";

// todo:hacer paginacion, trabajar en filtro de mens y womens

export default function CategoryPage() {
  const pathName = usePathname()
  const category = pathName.split("/")[2] as "fragrances" | "mens" | "womens" | "sports" | "vehicle" | "";

  const productsFiltered = useFilter({ categoryString:category });

  if (!productsFiltered) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <h1 className="text-xl font-semibold">Productos {category}</h1>
      <section className="flex flex-wrap justify-center items-center gap-8">
        {productsFiltered.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}
