"use client";
import React from "react";
import { hoverPointer } from "../../../utils/styles";
import Link from "next/link";
import { useToggle } from "../../../hooks/useToggle";
import { Bars3Icon} from "@heroicons/react/24/solid";

interface LiProps {
  title: string;
  url: string;
}

export default function MenuNav() {
  //custom hook para toggle
  const { isToggleOpen, handlerToggle } = useToggle();

  //componetizacion de li
  const Li: React.FC<LiProps> = ({ title, url }) => {
    return (
      <li className={`${hoverPointer}`} onClick={handlerToggle}>
        <Link href={url}>{title}</Link>
      </li>
    );
  };

  return (
    <>
      <div  data-testid="menu-nav" className="flex items-center">
        <button
          className={`${hoverPointer} relative ${
            isToggleOpen === true && "z-40"
          }`}
          onClick={handlerToggle}
        >
          <Bars3Icon className={`size-6 text-colorDark1`} />
        </button>
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
            <Li url={"/products/fragrances"} title={"Nueva Colección"} />
          </ul>
        </nav>
      </div>
    </>
  );
}
