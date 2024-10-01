import React from "react";
import Logo from "../header/cartComponents/logo/Logo";
import Link from "next/link";
import { hoverPointer } from "../../utils/styles";

interface LiProps {
  title: string;
  url: string;
}

export default function Footer() {
  const Li: React.FC<LiProps> = ({ title, url }) => {
    return (
      <li role="li" className={`${hoverPointer} w-fit`}>
        <Link href={url}>{title}</Link>
      </li>
    );
  };
  return (
    <section className="bg-colorDark1 py-3 px-4 flex flex-col gap-2">
      <Logo data-testid="logo" />
      <nav className="text-colorLight1">
        <ul className=" flex flex-col gap-1">
          <li role='li' className="text-lg font-medium">Navegación rápida</li>
          <Li url={"/"} title={"Inicio"} />
          <Li url={"/products"} title={"Productos"} />
          <Li url={"/contact"} title={"Contacto"} />
          <Li url={"/products/offer"} title={"Ofertas"} />
          <Li url={"/products/fragrances"} title={"Nueva Colección"} />
        </ul>
      </nav>
    </section>
  );
}
