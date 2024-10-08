"use client";
import React, { useEffect, useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { AdjustmentsHorizontalIcon, StarIcon } from "@heroicons/react/24/solid";
import { CartItems, Products } from "../../utils/types";

//todo:arreglar input de precio ya que al actualizar el numero se actualiza el array de productos por lo que se vuelve a actualizar el valor maximo del input

interface FilterComponentProp {
  products: Products[];
  onFiltroChange: (filtroProps: [string, number, number]) => void;
}

export default function FilterComponent({
  products,
  onFiltroChange,
}: FilterComponentProp) {
  const { isToggleOpen, handlerToggle } = useToggle();

  const priceMin =
    products.length > 0
      ? products.reduce((min: number, product: Products) => {
          return product.price < min ? product.price : min;
        }, products[0].price)
      : 0;

  const priceMax =
    products.length > 0
      ? products.reduce((max, product) => {
          return product.price > max ? product.price : max;
        }, products[0].price)
      : 0;

  //actualizacion del numero del input rango
  const [rangeValue, setRangeValue] = useState<number>(priceMax);

  const handlerRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rangeTipe = parseInt(event.target.value, 10);
    setRangeValue(rangeTipe);
    SetPrice(rangeValue);
  };

  //estado con los parametros
  const [categorySingle, SetCategorySingle] = useState("");
  const [rating, SetRating] = useState(0);
  const [price, SetPrice] = useState(0);

  const [filterProps, setFilterProps] = useState<[string, number, number]>([
    "",
    0,
    0,
  ]);

  //actualizacion de props del padre

  useEffect(() => {
    const handlerChange = () => {
      const nuevoFiltro: [string, number, number] = [
        categorySingle,
        rating,
        price,
      ];

      setFilterProps(nuevoFiltro); // Actualiza el estado de filterProps
      onFiltroChange(nuevoFiltro); // Llama a la función del padre con el nuevo filtro
    };

    handlerChange();
  }, [categorySingle, rating, price]);

  //logica de rating
  const [starsYellow, setStarsYellow] = useState(Array());
  const starsGrey = Array(5 - starsYellow.length).fill(0);

  const handlerRating = (index: number) => {
    SetRating(index);
    setStarsYellow(Array(index).fill(0));
  };
  return (
    <div>
      <AdjustmentsHorizontalIcon
        onClick={handlerToggle}
        className="size-6 text-colorDark1 cursor-pointer"
      />

      {isToggleOpen === true && (
        <section className="absolute top-20 right-5 w-5/6 h-fit z-20 bg-colorLight1 shadow-md rounded-md overflow-hidden">
          <p className="bg-colorLight2 p-2">Filtro</p>
          <div className="flex flex-col gap-2 p-1">
            <div>
              <p>categoria</p>
              <ul className="flex flex-wrap gap-1">
                <li
                  onClick={() => SetCategorySingle("mens-shirts")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  mens-shirts
                </li>
                <li
                  onClick={() => SetCategorySingle("mens-shoes")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  mens-shoes
                </li>
                <li
                  onClick={() => SetCategorySingle("mens-watches")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  mens-watches
                </li>
                <li
                  onClick={() => SetCategorySingle("sports-accessories")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  sports-accessories
                </li>
                <li
                  onClick={() => SetCategorySingle("womens-bags")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  womens-bags
                </li>
                <li
                  onClick={() => SetCategorySingle("womens-dresses")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  womens-dresses
                </li>
                <li
                  onClick={() => SetCategorySingle("womens-jewellery")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  womens-jewellery
                </li>
                <li
                  onClick={() => SetCategorySingle("womens-shoes")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  womens-shoes
                </li>
                <li
                  onClick={() => SetCategorySingle("womens-watches")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  womens-watches
                </li>
                <li
                  onClick={() => SetCategorySingle("vehicle")}
                  className="rounded-md bg-colorLight2 cursor-pointer text-sm text-colorDark1"
                >
                  vehicle
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p>Rating</p>
              <div className="flex gap-1">
                {starsYellow.map((_, index) => {
                  return (
                    <StarIcon
                      onClick={() => handlerRating(index + 1)}
                      key={index}
                      className="size-6 cursor-pointer text-yellow-300"
                    />
                  );
                })}

                {starsGrey.map((_, index) => {
                  return (
                    <StarIcon
                      onClick={() =>
                        handlerRating(index + starsYellow.length + 1)
                      }
                      key={index + starsYellow.length}
                      className="size-6 cursor-pointer text-colorDark2"
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <p>Precio</p>
              <div className="flex gap-1 ">
                <input
                  type="range"
                  name="price"
                  id=""
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
