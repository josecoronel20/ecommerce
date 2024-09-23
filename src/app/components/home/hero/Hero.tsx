import React from "react";
import Image from "next/image";
import { hoverPointer, styleButtonWhite } from "../../../utils/styles";
import Link from "next/link";

export default function Hero() {
    //todo: corregir error de path newcolecction
  return (
    <section
      style={{
        height: "50vh",
        width: "100%",
        position: "relative",
        marginTop: "45px",
      }}
    >
      <Image
        src="/ecommerce/images/hero.jpg"
        alt="Hero Image"
        fill
        style={{
          objectFit: "cover",
          transform: "scaleX(-1)",
          borderRadius: "20px",
          overflow: "hidden",
          padding: "5px",
        }}
        // priority
      />
      <section className="relative z-10 px-5 w-full h-full flex flex-col text-center gap-5 text-colorLight1 justify-center items-center">
        <h1 className="text-4xl font-semibold">
          Nueva colección de fragancias
        </h1>
        <p>Perfúmes exclusivos para la temporada, elegancia en cada detalle</p>
        <button
          className={`${styleButtonWhite} ${hoverPointer} text-sm font-medium`}
        >
          <Link href='/products/newColecction'>EXPLORA LA COLECCIÓN</Link>
        </button>
      </section>
    </section>
  );
}
