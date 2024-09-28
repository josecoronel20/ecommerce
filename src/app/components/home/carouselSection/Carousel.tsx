"use client";
import React, { useContext, useRef } from "react";
import { ContextProducts } from "../../../context/ContextProducts";
import Card from "../../reutilizableComponents/card/Card";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { hoverPointer } from "../../../utils/styles";
import Link from "next/link";

export default function Carousel() {
  const refContainer = useRef<HTMLDivElement>(null);

  //obtiene todos los productos del contexto
  const productsContext = useContext(ContextProducts);

  if (!productsContext) {
    return null;
  }

  const { products } = productsContext;

  //filtra los productos de fragances
  const productsFiltered = products.filter(
    (product) => product.category === "fragrances"
  );

  const scrollAmount = 100;

  const handlerLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    if (refContainer.current) {
      refContainer.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlerRight = (e: React.MouseEvent) => {
    e.preventDefault();
    if (refContainer.current) {
      refContainer.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-3 px-1">
      <div className="flex justify-between">
        <h2 className="text-xl ">Productos destacados</h2>
        <Link
          href="/products"
          className={`${hoverPointer} text-colorColor hover:underline decoration-solid duration-150 ease-in-out transition-transform`}
        >
          Ver todo
        </Link>
      </div>
      <div className="relative">
        <ArrowLeftCircleIcon
          data-testid="arrow-left"
          onClick={handlerLeft}
          className={`${hoverPointer} size-6 cursor-pointer text-colorDark1 absolute left-1 top-1/2 z-10`}
        />
        <section
          ref={refContainer}
          className="p-1 flex gap-3 overflow-x-scroll scroll-smooth scrollbar-hidden transition-transform duration-150 ease-in-out scroll-container"
        >
          {productsFiltered.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </section>
        <ArrowRightCircleIcon
          data-testid="arrow-right"
          onClick={handlerRight}
          className="${hoverPointer} size-6 cursor-pointer text-colorDark1 absolute right-0 top-1/2"
        />
      </div>
    </section>
  );
}