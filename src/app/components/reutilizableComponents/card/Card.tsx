import Image from "next/image";
import React from "react";
import { CartItems } from "../../../utils/types";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { hoverPointer, styleButtonDark, styleButtonWhite } from "../../../utils/styles";

interface CardProps {
  product: CartItems;
}

export default function Card({ product }: CardProps) {
    //todo: agregar logica de flechas
  return (
    <div className="min-w-40 p-1 gap-1 flex flex-col cardSnap">
        <div className="relative min-h-40 w-full bg-colorLight2 rounded-lg overflow-hidden">
      <Image
        src={product.images[0]}
        alt={product.title}
        fill
        className="p-1 object-contain"
      /></div>
      <h3 className="h-full">{product.title}</h3>
      <p className="text-colorDark2">${product.price}</p>
      <button className={`${hoverPointer} ${styleButtonDark}`}>
        <Link href={`/products/${product.id}`}>
          <ShoppingBagIcon className="size-6" />
        </Link>
      </button>
    </div>
  );
}
