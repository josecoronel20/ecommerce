"use client";
import React, { useEffect, useState, useRef, use } from "react";
import { useToggle } from "../../hooks/useToggle";
import { AdjustmentsHorizontalIcon, StarIcon } from "@heroicons/react/24/solid";
import { Products } from "../../utils/types";

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

  // Estado para el valor del rango
  const [rangeValue, setRangeValue] = useState<number>(0);

  // Estados para precio mínimo y máximo que no se recalculen con cada actualización
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(0);

  // Inicializar el valor de precio mínimo y máximo al cargar los productos por primera vez
  useEffect(() => {
    if (isInitialMount.current && products.length > 0) {
      const minPrice = products.reduce((min: number, product: Products) => {
        return product.price < min ? product.price : min;
      }, products[0].price);

      const maxPrice = products.reduce((max: number, product: Products) => {
        return product.price > max ? product.price : max;
      }, products[0].price);

      setPriceMin(minPrice);
      setPriceMax(maxPrice);
      setRangeValue(maxPrice); // Establecer el valor del rango inicial al precio máximo

      isInitialMount.current = false; // Marcar que ya se ha hecho la primera inicialización
    }
  }, [products]);

  // Actualización del filtro cuando se cambian las opciones
  useEffect(() => {
    const nuevoFiltro: [string, number, number] = [
      categorySingle,
      rating,
      price,
    ];
    onFiltroChange(nuevoFiltro); // Llamar al padre con los nuevos filtros
  }, [categorySingle, rating, price, onFiltroChange]);

  // Manejo del rating (estrellas)
  const [starsYellow, setStarsYellow] = useState<number[]>([]);
  const starsGrey = Array(5 - starsYellow.length).fill(0);

  const handlerRating = (index: number) => {
    SetRating(index);
    setStarsYellow(Array(index).fill(0));
  };

  // Manejo del cambio del rango de precio
  const handlerRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rangeTipe = parseInt(event.target.value, 10);
    setRangeValue(rangeTipe); // Actualizar el valor mostrado en el input
    SetPrice(rangeTipe); // Actualizar el estado del precio
  };

  const handlerCategorySingle = (category: string) => {
    SetCategorySingle(category);
    isInitialMount.current = true;
  };

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
            {/* Filtro de categorías */}
            <div>
              <p>Categoría</p>
              <ul className="flex flex-wrap gap-1">
                {[
                  "mens-shirts",
                  "mens-shoes",
                  "mens-watches",
                  "sports-accessories",
                  "womens-bags",
                  "womens-dresses",
                  "womens-jewellery",
                  "womens-shoes",
                  "womens-watches",
                  "vehicle",
                ].map((category) => (
                  <li
                    key={category}
                    onClick={() => handlerCategorySingle(category)}
                    className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtro de rating */}
            <div className="flex flex-col gap-1">
              <p>Rating</p>
              <div className="flex gap-1">
                {starsYellow.map((_, index) => (
                  <StarIcon
                    onClick={() => handlerRating(index + 1)}
                    key={index}
                    className="size-6 cursor-pointer text-yellow-300"
                  />
                ))}

                {starsGrey.map((_, index) => (
                  <StarIcon
                    onClick={() =>
                      handlerRating(index + starsYellow.length + 1)
                    }
                    key={index + starsYellow.length}
                    className="size-6 cursor-pointer text-colorDark2"
                  />
                ))}
              </div>
            </div>

            {/* Filtro de precio */}
            <div>
              <p>Precio</p>
              <div className="flex gap-1">
                <input
                  type="range"
                  name="price"
                  min={priceMin}
                  max={priceMax}
                  value={rangeValue}
                  onChange={handlerRangeValue}
                />
                <p>${rangeValue}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
