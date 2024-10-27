"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import useFilter from "../../../../hooks/useFilter";
import ImagesDetail from "../../../../components/productsDetail/ImagesDetail";
import { useFilterSingle } from "../../../../hooks/useFilterSingle";
import Stars from "../../../../components/reutilizableComponents/stars/Stars";
import AddToCart from "../../../../components/reutilizableComponents/addToCart/AddToCart";
import { PercentBadgeIcon } from "@heroicons/react/24/solid";

export default function ProductDetail() {
  const pathName = usePathname();
  const id = parseInt(pathName.split("/")[4]);
  console.log(id);

  const [filtroProps, setFiltroProps] = useState<[string, number, number]>([
    "",
    0,
    0,
  ]);

  const productsFiltered = useFilterSingle(id);
  if (!productsFiltered) {
    return null;
  }

  const price =
    productsFiltered.discountPercentage < 15 ? (
      <h2 className="text-3xl font-semibold">${productsFiltered.price}</h2>
    ) : (
      <div>
        <p className="text-colorLight3 font-semibold line-through text-xl">$
          {Math.round((productsFiltered.price * productsFiltered.discountPercentage) /
            100 +
            productsFiltered.price)}
        </p>
        <h2 className="text-2xl font-semibold">
          AHORA ${productsFiltered.price}
        </h2>
      </div>
    );

  return (
    <div className="flex min-h-screen mt-11 p-2 flex-col gap-2 text-colorDark1">
      <ImagesDetail productFiltered={productsFiltered} />

      <section
        className="flex flex-col gap-2" //detail section
      >
        <p className="text-colorLight3 text-sm">{productsFiltered.category}</p>

        <h1 className="text-xl font-semibold">{productsFiltered.title}</h1>

        <div className="flex justify-between">

          {price}

          {productsFiltered.discountPercentage > 15 && (
            <div className="flex gap-1 items-center justify-center">
              <PercentBadgeIcon className="size-6 text-colorLight3" />
              <p className="text-sm text-colorLight3">
                {productsFiltered.discountPercentage}% OFF
              </p>
            </div>
          )}
        </div>

        <div
          className="flex gap-1" //rating
        >
          <Stars rating={productsFiltered.rating} />
          <p className="font-semibold1">{`(${productsFiltered.rating})`}</p>
        </div>

        <div
          className="flex flex-col gap-1 " //description
        >
          <h3 className="font-semibold">Descripción</h3>
          <p className="text-colorLight3 text-sm">
            {productsFiltered.description}
          </p>
        </div>
      </section>

      <AddToCart productId={productsFiltered.id} />

      <section
        className="py-3 flex flex-col gap-3" //reviews
      >
        <h4 className="font-semibold text-xl">Reviwes</h4>
        {productsFiltered.reviews.map((review) => {
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
