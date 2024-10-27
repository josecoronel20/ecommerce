"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useFilter from "../../../hooks/useFilter";
import Card from "../../../components/reutilizableComponents/card/Card";

export default function CategoryPage() {
  const pathCategory = usePathname().split("category/")[1];

  let title: string;

  switch (pathCategory) {
    case "sports":
      title = "Productos deportivos";
      break;

    case "womens":
      title = "Productos de mujer";
      break;

    case "fragrances":
      title = "Perfumes (NUEVA COLECCIÓN)";
      break;

    case "mens":
      title = "Productos de hombre";
      break;

    case "vehicle":
      title = "Vehículos";
      break;

    default:
      title = "Productos"
      break;
  }
  const [filtroProps, setFiltroProps] = useState<[string, number, number]>([
    "",
    0,
    0,
  ]);

  const productsFiltered = useFilter({
    filterBy: "categoryGeneral",
    filterProp: pathCategory,
    filterComponentProp: filtroProps,
  });

  //si no existen los productos filtrados o los productos filtrados no es array, se retorna null
  if (!productsFiltered || !Array.isArray(productsFiltered)) {
    return null;
  }

  return (
    <section className="block min-h-screen mt-11 p-1">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <section className="flex flex-wrap justify-center items-center gap-8 ">
        {productsFiltered.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </section>
    </section>
  );
}
