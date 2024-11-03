import Image from "next/image";
import React, { useState } from "react";
import { Products } from "../../utils/types";

interface ProductFilteredProps {
  productFiltered: Products;
}

export default function ImagesDetail({
  productFiltered,
}: ProductFilteredProps) {
  const [imageSelected, setImageSelected] = useState<number>(0);

  const handlerImageSelected = (index: number) => {
    setImageSelected(index);
  };

  return (
    <section
      className="flex flex-col gap-1" //images section
    >
      <div
        data-testid="principalImage"
        className="relative min-h-80 w-full bg-colorLight2 rounded-lg overflow-hidden"
      >
        <Image
          src={productFiltered.images[imageSelected]}
          alt={productFiltered.title}
          fill
          className="p-1 object-contain"
        />
      </div>
      <div className="grid gap-1 grid-cols-3">
        {productFiltered.images.map((image: string, index) => {
          return (
            <div
              onClick={() => handlerImageSelected(index)}
              key={index}
              className="relative h-24 w-full bg-colorLight2 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image}
                alt={productFiltered.title}
                fill
                className="p-1 object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
