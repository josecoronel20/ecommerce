import React from "react";
import Logo from "../cartComponents/logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import Cart from "../cartComponents/cart/Cart";
import Link from "next/link";
import MenuNav from "../menuNav/MenuNav"

export default function Header() {
  return (
    <header className="p-1 top-0 left-0 fixed z-50 w-full bg-colorLight1">
      <div className=" flex flex-row justify-between items-center gap-2">
        <div className="flex flex-row items-center gap-2 md:flex-row-reverse">
          <MenuNav/>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <SearchBar />
          <Cart />
        </div>
      </div>
    </header>
  );
}
