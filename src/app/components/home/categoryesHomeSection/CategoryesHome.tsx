"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { hoverPointer } from "../../../utils/styles";

interface CategoryImageProps {
  src: string;
  title: string;
  path: string;
}

export default function CategoryesHome() {
  const CategoryImage = ({ src, title, path }: CategoryImageProps) => {
    return (
      <div
        className={`relative h-40 ${
          title === "Perfumes" ? "col-span-2" : ""
        } ${hoverPointer} `}
      >
        <Link href={path}>
          <Image
            src={src}
            alt={`imagen de ${title}`}
            fill
            style={{
              objectFit: "cover",
              borderRadius: "20px",
              overflow: "hidden",
              padding: "5px",
            }}
            // priority
          />
          <div
            className={`
            absolute bottom-1 w-full px-4 py-2 `}
          >
            <h3 className="bg-colorLight1 rounded-xl p-1 flex justify-center scale-105">
              {title}
            </h3>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className="py-3 px-1  max-w-5xl m-auto">
      <h2 className="text-xl">Categorías</h2>
      <div className="grid grid-cols-2">
        <CategoryImage
          src={"/ecommerce/images/CategorySport.webp"}
          path={"/products/category/sports"}
          title={"Deporte"}
        />
        <CategoryImage
          src={"/ecommerce/images/CategoryWoman.webp"}
          path={"/products/category/womens"}
          title={"Mujer"}
        />
        <CategoryImage
          src={"/ecommerce/images/CategoryPerfume.webp"}
          path={"/products/category/fragrances"}
          title={"Perfumes"}
        />
        <CategoryImage
          src={"/ecommerce/images/CategoryMan.webp"}
          path={"/products/category/mens"}
          title={"Hombre"}
        />

        <CategoryImage
          src={"/ecommerce/images/CategoryVehicle.jpg"}
          path={"/products/category/vehicle"}
          title={"Vehículos"}
        />
      </div>
    </section>
  );
}
