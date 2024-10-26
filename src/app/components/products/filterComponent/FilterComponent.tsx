"use client";
import React, { useEffect, useState, useRef, use } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { AdjustmentsHorizontalIcon, StarIcon } from "@heroicons/react/24/solid";
import { Products } from "../../../utils/types";
import CategorySection from "./category/CategorySection";
import RatingSection from "./rating/ratingSection";
import PriceSection from "./price/PriceSection";

interface FilterComponentProp {
  products: Products[];
  onFiltroChange: (filtroProps: [string, number, number]) => void;
}

export default function FilterComponent({
  products,
  onFiltroChange,
}: FilterComponentProp) {
  const { isToggleOpen, handlerToggle } = useToggle();

  // Estados para los filtros
  const [categorySingle, SetCategorySingle] = useState("");
  const [rating, SetRating] = useState(0);
  const [price, SetPrice] = useState(0);

  // Referencias para manejar la actualización solo una vez
  const isInitialMount = useRef(true);

  // Actualización del filtro cuando se cambian las opciones
  useEffect(() => {
    const nuevoFiltro: [string, number, number] = [
      categorySingle,
      rating,
      price,
    ];
    onFiltroChange(nuevoFiltro); // Llamar al padre con los nuevos filtros
  }, [categorySingle, rating, price]);

  return (
    <div>
      <AdjustmentsHorizontalIcon
        onClick={handlerToggle}
        className="size-6 text-colorDark1 cursor-pointer"
      />

      {isToggleOpen && (
        <section className="absolute top-20 right-5 w-5/6 h-fit z-20 bg-colorLight1 shadow-md rounded-md overflow-hidden">
          <p className="bg-colorLight2 p-2">Filtro</p>
          <div className="flex flex-col gap-2 p-1">
            <CategorySection
              seter={SetCategorySingle}
              isInitialMount={isInitialMount}
            />

            <RatingSection setRating={SetRating} />

            <PriceSection
              isInitialMount={isInitialMount}
              products={products}
              setPrice={SetPrice}
            />
          </div>
        </section>
      )}
    </div>
  );
}
