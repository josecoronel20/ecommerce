import Image from "next/image";
import React from "react";
import { Products } from "../../../utils/types";
import Link from "next/link";
import AddToCart from "../addToCart/AddToCart";
import { useUrlDetail } from "../../../hooks/useUrlDetail";
import { PercentBadgeIcon } from "@heroicons/react/24/solid";

interface CardProps {
  product: Products;
}

export default function Card({ product }: CardProps) {
  const urlDetail = useUrlDetail({
    category: product.category,
    id: product.id,
  });

  return (
    <div className=" min-w-40 max-w-40 p-1 gap-1 flex flex-col cardSnap justify-between">
      <Link
        href={`/products/category/${urlDetail}`}
        className="flex flex-col gap-1"
      >
        <div className="relative min-h-40  w-full bg-colorLight2 rounded-lg overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="p-1 object-contain"
          />
        </div>
        <h3 className="h-full">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-colorDark2">${product.price}</p>
          {product.discountPercentage > 15 && (
            <PercentBadgeIcon className="size-5 text-colorDark2" />
          )}
        </div>
      </Link>

      <AddToCart productId={product.id} />
    </div>
  );
}
