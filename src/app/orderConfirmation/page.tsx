"use client";
import React, { useContext, useEffect, useState } from "react";
import CardCheckout from "../components/checkout/CardCheckout";
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
      className="mt-11 p-2
    "
    >
      <section>
        <CardCheckout />
      </section>

      <section>
        <h1>Gracias por su compra</h1>
        <h2>
          Su pedido será procesado dentro de las próximas 24 horas hábiles. Una
          vez que la compra haya sido confirmada, recibirá una notificación por
          correo electrónico
        </h2>
        <div>
          <h3>Dirección de facturación</h3>
          <div>
            <div>
              <p>nombre</p> <p>{formData[4]}</p>
            </div>
            <div>
              <p>Dirección</p> <p>{formData[6]}</p>
            </div>
            <div>
              <p>Email</p> <p>{formData[0]}</p>
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
    </section>
  );
}
