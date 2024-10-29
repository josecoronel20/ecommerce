"use client";
import React, { useContext, useEffect, useState } from "react";
import CardCheckout from "../components/checkout/CardCheckout/CardCheckout";
import Link from "next/link";
import { hoverPointer, styleButtonBorder } from "../utils/styles";
import { ContextCart } from "../context/ContextCart";

export default function OrderConfirmation() {
  const [formData, setFormData] = useState<string[]>([]);
  const context = useContext(ContextCart);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
      console.log(storedFormData);
    }
  }, []);

  if (!context) {
    return null;
  }

  const { setCartItems } = context;

  const handlerCleanCart = () => {
    setCartItems([]);
  };

  return (
    <section
      className="mt-11 p-2 min-h-screen flex flex-col items-center justify-center
    "
    >
      <section className="flex flex-col gap-2 text-colorDark1 max-w-md">
        <h1 className="text-3xl font-semibold">Gracias por su compra!</h1>
        <h2>
          Su pedido será procesado dentro de las próximas 24 horas hábiles. Una
          vez que la compra haya sido confirmada, recibirá una notificación por
          correo electrónico
        </h2>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">Dirección de facturación</h3>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <h4>nombre</h4> <p>{formData[4]}</p>
            </div>
            <div className="flex justify-between">
              <h4>Dirección</h4> <p>{formData[6]}</p>
            </div>
            <div className="flex justify-between">
              <h4>Email</h4> <p>{formData[0]}</p>
            </div>
          </div>
          <button
            onClick={handlerCleanCart}
            className={`${hoverPointer} ${styleButtonBorder}`}
          >
            <Link href={"/"}>Volver al menú</Link>
          </button>
        </div>
      </section>
      <CardCheckout />

    </section>
  );
}
