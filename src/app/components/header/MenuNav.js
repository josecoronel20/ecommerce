"use client";
import React from "react";
import { hoverPointer } from "@/app/utils/styles";
import { IconMenu } from "@/app/utils/icons";
import Link from "next/link";
import { useToggle } from "@/app/hooks/useToggle";

export default function MenuNav() {
  //custom hook para toggle
  const { isToggleOpen, handlerToggle } = useToggle();

  //componetizacion de li
  const Li = ({ title, url }) => {
    return (
      <li className={`${hoverPointer}`} onClick={handlerToggle}>
        <Link href={url}>{title}</Link>
      </li>
    );
  };

  return (
    <>
      <div>
        <div
          className={`${hoverPointer} relative ${isToggleOpen === true && "z-40"}`}
          onClick={handlerToggle}
        >
          <IconMenu />
        </div>
        <nav
          className={`${isToggleOpen === false ? "-translate-y-full" : ""} 
            
          absolute backdrop-blur-sm bg-colorDark1 bg-opacity-10 z-30 h-screen w-full top-0 left-0 transition-transform ease-in-out duration-150 pt-6

            `}
        >
          <ul className="w-full h-full flex flex-col items-center gap-5 justify-center">
            <Li url={"/"} title={"Inicio"} />
            <Li url={"/products"} title={"Productos"} />
            <Li url={"/contact"} title={"Contacto"} />
            <Li url={"/products/offer"} title={"Ofertas"} />
            <Li url={"/products/newColection"} title={"Nueva Colección"} />
          </ul>
        </nav>
      </div>
    </>
  );
}
