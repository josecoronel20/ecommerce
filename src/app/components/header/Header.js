import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Cart from "./cartComponents/Cart";
import Link from "next/link";
import MenuNav from "./MenuNav"

export default function Header() {
  return (
    <header className="p-1 fixed z-50 w-full bg-colorLight1">
      <div className=" flex flex-row justify-between items-center gap-2">
        <div className="flex flex-row items-center gap-2">
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
