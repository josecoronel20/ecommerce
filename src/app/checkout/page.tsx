import React from "react";
import CardCheckout from "../components/checkout/CardCheckout";
import FormCheckout from "../components/checkout/FormCheckout";

export default function Checkout() {
  
  return (
    <section className="mt-11 p-2
    ">
      <h1>Resumen de compra</h1>
      <div className="p-1">
        <CardCheckout />
      </div>

      <div>
        <h2>Colocar detalles de facturación</h2>
        <FormCheckout/>
      </div>
    </section>
  );
}
