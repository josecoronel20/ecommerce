"use client";
import React from "react";
import { hoverPointer, styleButtonWhite } from "../../../../utils/styles";
import { useToggle } from "../../../../hooks/useToggle";
import { ContextCart } from "../../../../context/ContextCart";
import { useContext } from "react";
import PriceTotal from "../priceTotal/PriceTotal";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import CartCard from "../cartCard/CartCard";

export default function Cart() {
  const { isToggleOpen, handlerToggle } = useToggle();

  const context = useContext(ContextCart);

  if (!context) {
    throw new Error("ContextCart must be used within a ContextCart.Provider");
  }

  const { cartItems, handlerQuantity, handlerDelete } = context;

  return (
    <>
      <button
        onClick={handlerToggle}
        className={`${hoverPointer} relative ${
          isToggleOpen === true && "z-40"
        }`}
      >
        <ShoppingBagIcon className="size-6 text-colorDark1" />
      </button>
      {isToggleOpen === true && (
        <section
          className={`absolute z-30 flex justify-center  items-center left-0 top-0 w-full h-screen bg-colorDark1 bg-opacity-5 backdrop-blur-sm
        px-5 pb-5 pt-10`}
        >
          <div className="bg-white w-full rounded-md overflow-hidden shadow-custom shadow-colorLight3">
            <div className="p-1 bg-colorLight2">
              <h2 className="font-medium">Carrito</h2>
            </div>

            <header className="text-colorLight3 text-xs grid grid-cols-4 my-2 mx-1">
              <p className="col-span-2">PRODUCTO</p>
              <p className="flex justify-center">CANTIDAD</p>
              <p className="flex justify-end">PRECIO</p>
            </header>

            <div className="flex flex-col justify-between">
              <div className="p-1">
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
              <footer className="p-1 flex flex-col gap-5 items-center">
                <PriceTotal cartItems={cartItems} />
                <Link
                  onClick={handlerToggle}
                  href="/checkout"
                  className={`${styleButtonWhite} ${hoverPointer} w-11/12`}
                >
                  Proceder al pago
                </Link>
              </footer>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
