"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useFilterSingle } from "../../../hooks/useFilterSingle";
import Image from "next/image";
import Stars from "../../../components/reutilizableComponents/stars/Stars";
import AddToCart from "../../../components/reutilizableComponents/addToCart/AddToCart";
import ImagesDetail from "../../../components/productsDetail/ImagesDetail";

export default function ProductDetail() {
  const pathName = usePathname();
  const id = parseInt(pathName.split("/")[3]);
  console.log(id);

  const productFiltered = useFilterSingle(id);

  if (!productFiltered) {
    return null;
  }
  return (
    <div className="flex min-h-screen mt-11 p-2 flex-col gap-2 text-colorDark1">
      <ImagesDetail productFiltered={productFiltered} />

      <section
        className="flex flex-col gap-2" //detail section
      >
        <p className="text-colorLight3 text-sm">{productFiltered.category}</p>

        <h1 className="text-xl font-semibold">{productFiltered.title}</h1>

        <h2 className="text-3xl font-semibold">${productFiltered.price}</h2>

        <div
          className="flex gap-1" //rating
        >
          <Stars rating={productFiltered.rating} />
          <p className="font-semibold1">{`(${productFiltered.rating})`}</p>
        </div>

        <div
          className="flex flex-col gap-1 " //description
        >
          <h3 className="font-semibold">Descripción</h3>
          <p className="text-colorLight3 text-sm">
            {productFiltered.description}
          </p>
        </div>
      </section>

      <AddToCart productId={productFiltered.id} />

      <section
        className="py-3 flex flex-col gap-3" //reviews
      >
        <h4 className="font-semibold text-xl">Reviwes</h4>
        {productFiltered.reviews.map((review) => {
          return (
            <div className="flex flex-col gap-2 p-3" key={review.date}>
              <div className="flex justify-between">
                <Stars rating={review.rating} />
                <p className="text-sm text-colorLight3">
                  {review.date.split("T")[0]}
                </p>
              </div>

              <p className="text-lg font-medium">{review.comment}</p>

              <p className="text-sm text-colorLight3">{review.reviewerEmail}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
