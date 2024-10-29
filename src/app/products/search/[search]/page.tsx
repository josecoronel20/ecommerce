"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useFilter from "../../../hooks/useFilter";
import FilterComponent from "../../../components/products/filterComponent/FilterComponent";
import Card from "../../../components/reutilizableComponents/card/Card";

export default function CategoryPage() {
    const pathSearch = usePathname().split('search/')[1]

    const [filtroProps, setFiltroProps] = useState<[string, number, number]>([
        "",
        0,
        0,
      ]);

    const productsFiltered = useFilter({
        filterBy: "search",
        filterProp: pathSearch,
        filterComponentProp: filtroProps,
      });

       //si no existen los productos filtrados o los productos filtrados no es array, se retorna null
  if (!productsFiltered || !Array.isArray(productsFiltered)) {
    return null;
  }
 
  return (
    <section className="block min-h-screen mt-11 p-1">
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold">Productos</h1>
      {/* <FilterComponent
        products={productsFiltered}
        onFiltroChange={handlerFiltroChange}
      /> */}
    </div>
    <section className="flex flex-wrap justify-center items-stretch gap-8 max-w-5xl m-auto">
      {productsFiltered.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  </section>
  );
}
