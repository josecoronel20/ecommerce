"use client"
import React from "react";
import useFilter from "../../hooks/useFilter";
import Card from "../../components/reutilizableComponents/card/Card";
import { usePathname } from "next/navigation";
import FilterComponent from "../../components/products/FilterComponent";

// todo:hacer paginacion, trabajar en filtro de mens y womens

export default function CategoryPage() {
  const pathName = usePathname()
  const category = pathName.split("/")[2] as "fragrances" | "mens" | "womens" | "sports" | "vehicle" ;

  const productsFiltered = useFilter({
    filterBy: "categorySingle",
    filterProp: category,
  });

  if (!productsFiltered || !Array.isArray(productsFiltered)) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <div className="flex justify-between">
      <h1 className="text-xl font-semibold">Productos {category}</h1>
      <FilterComponent products={productsFiltered}/></div>
      <section className="flex flex-wrap justify-center items-center gap-8">
        {productsFiltered.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}
