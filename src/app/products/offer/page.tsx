"use client";
import React, { useEffect, useState } from "react";
import useFilter from "../../hooks/useFilter";
import Card from "../../components/reutilizableComponents/card/Card";

export default function CategoryPage() {
  //todo:trabajar en paginacion
  //parametros del filtro
  const [filtroProps, setFiltroProps] = useState<[string, number, number]>([
    "",
    0,
    0,
  ]);

  //funcion para actualizar los parametros
  const handlerFiltroChange = (nuevasProps: [string, number, number]) => {
    setFiltroProps(nuevasProps);
  };

  const productsFiltered = useFilter({
    filterBy: "offer",
    filterProp: 15,
    filterComponentProp: filtroProps,
  });

  //si no existen los productos filtrados o los productos filtrados no es array, se retorna null
  if (!productsFiltered || !Array.isArray(productsFiltered)) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Productos en oferta (mayor a 15%)</h1>
      </div>
      <section className="flex flex-wrap justify-center gap-8 items-stretch ">
        {productsFiltered.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}