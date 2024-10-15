import React from "react";
import CardCheckout from "../components/checkout/CardCheckout/CardCheckout";
import FormCheckout from "../components/checkout/FormCheckout";

export default function Checkout() {
  
  return (
    <section className="mt-11 p-2
    ">
      <h1>Resumen de compra</h1>
      <div className="p-1">
        <CardCheckout />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-medium">Colocar detalles de facturación</h2>
        <FormCheckout/>
      </div>
    </section>
  );
}
