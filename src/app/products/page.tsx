"use client";
import React, { useState } from "react";
import useFilter from "../hooks/useFilter";
import Card from "../components/reutilizableComponents/card/Card";
import FilterComponent from "../components/products/FilterComponent";
import { CartItems } from "../utils/types";

export default function CategoryPage() {
  //parametros del filtro
  const [filtroProps, setFiltroProps] = useState<(string | number)[]>([]);

  //funcion para actualizar los parametros
  const handlerFiltroChange = (nuevasProps: (string | number)[]) => {
    setFiltroProps(nuevasProps);
  };

  //todo:trabajar en paginacion
  const productsFiltered = useFilter({
    filterBy: "categoryGeneral",
    filterProp: "all",
    filterComponentProp:filtroProps
  });

  //si no existen los productos filtrados o los productos filtrados no es array, se retorna null
  if (!productsFiltered || !Array.isArray(productsFiltered)) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Productos</h1>
        <FilterComponent
          products={productsFiltered}
          onFiltroChange={handlerFiltroChange}
        />
      </div>
      <section className="flex flex-wrap justify-center items-center gap-8 ">
        {productsFiltered.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}
