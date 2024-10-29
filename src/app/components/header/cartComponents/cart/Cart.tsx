"use client";
import React, { useEffect } from "react";
import {
  hoverPointer,
  styleButtonBorder,
  styleButtonWhite,
} from "../../../../utils/styles";
import { useToggle } from "../../../../hooks/useToggle";
import { ContextCart } from "../../../../context/ContextCart";
import { useContext } from "react";
import PriceTotal from "../priceTotal/PriceTotal";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import CartCard from "../cartCard/CartCard";

export default function Cart() {
  //corregir style de scrollbar 
  const { isToggleOpen, handlerToggle } = useToggle();

  const context = useContext(ContextCart);

  if (!context) {
    return null;
  }

  const { cartItems, handlerQuantity, handlerDelete } = context;

  return (
    <div>
      <button
        onClick={handlerToggle}
        className={`${hoverPointer} relative ${
          isToggleOpen === true && "z-40"
        }`}

        //datatestid
        data-testid="cart"
      >
        <ShoppingBagIcon className="size-6 text-colorDark1" />
      </button>

      {isToggleOpen === true && (
        <section
          className={`absolute z-30 flex justify-center  items-center left-0 top-0 w-full h-screen bg-colorDark1 bg-opacity-5 backdrop-blur-sm 
        px-5 pb-5 pt-10`}
        >
          <div className="bg-white w-fit h-full rounded-md shadow-custom shadow-colorLight3 overflow-y-scroll">
            <div className="p-1 bg-colorLight2">
              <h2 className="font-medium">Carrito</h2>
            </div>

            <div className="max-h-full">
              <header className="text-colorLight3 text-xs grid grid-cols-4 my-2 mx-1">
                <p className="col-span-2">PRODUCTO</p>
                <p className="flex justify-center">CANTIDAD</p>
                <p className="flex justify-end">PRECIO</p>
              </header>

              <div className="flex flex-col justify-between h-full">
                <div className="p-1 h-full overflow-hidden">
                  {cartItems.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-4 gap-2 py-6 justify-center border-t border-colorLight2"
                      >
                        <CartCard
                          item={item}
                          handlerQuantity={handlerQuantity}
                          handlerDelete={handlerDelete}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <footer className="p-1 flex flex-col gap-5 items-center">
                <PriceTotal cartItems={cartItems} />
                <Link
                  onClick={handlerToggle}
                  href="/checkout"
                  className={`${styleButtonBorder} ${hoverPointer} w-10/12`}
                >
                  Proceder al pago
                </Link>
              </footer>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
