"use client";
import React from "react";
import useFilter from "../hooks/useFilter";
import Card from "../components/reutilizableComponents/card/Card";

export default function CategoryPage() {
  //todo:trabajar en paginacion
  const productsFiltered = useFilter({ categoryString: "" });

  if (!productsFiltered) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <h1 className="text-xl font-semibold">Productos</h1>
      <section className="flex flex-wrap justify-center items-center gap-8 ">
        {productsFiltered.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}
