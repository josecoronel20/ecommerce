"use client";
import { count } from "console";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { hoverPointer, styleButtonBorder, styleButtonWhite } from "../../utils/styles";

export default function FormCheckout() {
  const [flagsNames, setFlagsNames] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("https://flagcdn.com/en/codes.json").then(
          (response) => response.json()
        );

        if (!data) {
          throw new Error("error de obtencion de datos");
        }

        setFlagsNames(data);
      } catch {
        console.log(Error);
      }
    }

    fetchData();
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="mail" placeholder="emailExample123@hotmail.com" />
      </div>
      <div>
        <p>Información de la tarjeta</p>
        <input type="number" placeholder="1234 5678 1234 5678" />
        <div className="flex">
          <input type="number" placeholder="12/34" />
          <input type="number" placeholder="123" />
        </div>
      </div>
      <div>
        <label htmlFor="cardName">Nombre de la tarjeta</label>
        <input type="text" placeholder="Juan Lopez" />
      </div>
      <div>
        <p>Dirección</p>
        <select name="countryName" id="countryName">
          {Object.keys(flagsNames).length > 0
            ? Object.entries(flagsNames).map(([code, country]) => {
                return (
                  <option key={code} value={code}>
                    {country}
                  </option>
                );
              })
            : null}
        </select>
        <input type="text" placeholder="Dirección 123 (Buenos Aires)" />
      </div>
      <Link className={`${hoverPointer} ${styleButtonBorder}`} href={"/OrderConfirmation"}>
        Confirmar el pago
      </Link>
    </form>
  );
}
