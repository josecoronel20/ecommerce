import React, { useEffect, useState } from "react";
import { Products } from "../../../../utils/types";

interface PriceProps {
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  isInitialMount: React.MutableRefObject<boolean>;
  products: Products[];
  isToggleOpen:boolean
  rating:number
}

const PriceSection: React.FC<PriceProps> = ({
  setPrice,
  products,
  isInitialMount,
  isToggleOpen,
  rating
}) => {
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
  }, [products,isToggleOpen,rating]);

  const handlerRangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rangeTipe = parseFloat(event.target.value);
    setRangeValue(rangeTipe); // Actualizar el valor mostrado en el input
    setPrice(rangeTipe); // Actualizar el estado del precio
  };

  return (
    <section>
      <p>Precio</p>
      <div className="flex gap-1">
        <input
          type="range"
          name="price"
          min={priceMin}
          max={priceMax}
          value={rangeValue}
          step="0.01"
          onChange={handlerRangeValue}
        />
        <p>${rangeValue}</p>
      </div>
    </section>
  );
};

export default PriceSection;
