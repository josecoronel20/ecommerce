"use client";
import { IconCart } from "@/app/utils/icons";
import React from "react";
import { hoverPointer, styleButtonWhite } from "@/app/utils/styles";
import { useToggle } from "@/app/hooks/useToggle";
import { ContextCart } from "@/app/context/ContextCart";
import { useContext } from "react";
import Quantity from "@/app/components/header/cartComponents/Quantity";
import Delete from "@/app/components/header/cartComponents/Delete";
import PriceIndividual from "@/app/components/header/cartComponents/PriceIndividual";
import PriceTotal from "@/app/components/header/cartComponents/PriceTotal";
import Link from "next/link";

export default function Cart() {
  const { cartItems, handlerQuantity, handlerDelete } = useContext(ContextCart);

  const { isToggleOpen, handlerToggle } = useToggle();

  return (
    <>
      <div onClick={handlerToggle} className={`${hoverPointer} relative ${isToggleOpen === true && "z-40"}`}>
        <IconCart />
      </div>
      {isToggleOpen === true && (
        <div
          className={`absolute z-30 flex justify-center  items-center left-0 top-0 w-full h-screen bg-colorDark1 bg-opacity-5 backdrop-blur-sm
        px-5 pb-5 pt-10`}
        >
          <div className="bg-white w-full rounded-md overflow-hidden shadow-custom shadow-colorLight3">
            <div className="p-1 bg-colorLight2">
              <h2 className="font-medium">Carrito</h2>
            </div>

              <div className="text-colorLight3 text-xs grid grid-cols-4 my-2 mx-1">
                <p className="col-span-2">PRODUCTO</p>
                <p className="flex justify-center">CANTIDAD</p>
                <p className="flex justify-end">PRECIO</p>
              </div>

            <div className="flex flex-col justify-between">
              <section className="p-1">
                {cartItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-4 gap-2 py-6 justify-center border-t border-colorLight2"
                    >
                      <div className="grid grid-cols-2 gap-1 col-span-2">
                        <img
                          className="bg-colorLight2 rounded"
                          src={item.images[0]}
                          alt={`img de ${item.title}`}
                        />
                        <h3 className="text-xs">{item.title}</h3>
                      </div>
                      <div className="flex flex-col gap-1 justify-start items-center">
                        <Quantity
                          product={item}
                          handlerQuantity={handlerQuantity}
                        />
                        <Delete
                          productId={item.id}
                          handlerDelete={handlerDelete}
                        />
                      </div>
                      <PriceIndividual
                        quantity={item.quantity}
                        price={item.price}
                      />
                    </div>
                  );
                })}
              </section>
              <section className="p-1 flex flex-col gap-5 items-center">
                <PriceTotal cartItems={cartItems} />
                <Link onClick={handlerToggle} href="/checkout" className={`${styleButtonWhite} ${hoverPointer} w-11/12`}>Proceder al pago</Link>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
