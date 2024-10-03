"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useFilterSingle } from "../../../hooks/useFilterSingle";
import Image from "next/image";

export default function ProductDetail() {
  const pathName = usePathname();
  const id = parseInt(pathName.split("/")[3]);
  console.log(id);

  const productFiltered = useFilterSingle(id);

  if (!productFiltered) {
    return null;
  }
  return (
    <div className="block min-h-screen mt-11 p-1">
      <section className="flex flex-col gap-1">
        <div className="relative min-h-80 w-full bg-colorLight2 rounded-lg overflow-hidden">
          <Image
            src={productFiltered.images[0]}
            alt={productFiltered.title}
            fill
            className="p-1 object-contain"
          />
        </div>
        <div className="grid gap-1 grid-cols-3">
          {productFiltered.images.map((image) => {
            return (
              <div key={image} className="relative h-24 w-full bg-colorLight2 rounded-lg overflow-hidden">
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
    </div>
  );
}
