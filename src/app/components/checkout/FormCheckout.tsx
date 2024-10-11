"use client";
import { count } from "console";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import {
  hoverPointer,
  styleButtonBorder,
  styleButtonWhite,
} from "../../utils/styles";

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
    <form className="border-t border-colorLight2 flex flex-col gap-4 py-1">
      <div className="flex flex-col gap-1">
        <label className="font-medium text-colorLight3" htmlFor="email">
          Email
        </label>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="mail"
          placeholder="emailExample123@hotmail.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-colorLight3">
          Información de la tarjeta
        </p>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="number"
          placeholder="1234 5678 1234 5678"
        />
        <div className="grid gap-1 grid-cols-2">
          <input
            className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
            type="number"
            placeholder="12/34"
          />
          <input
            className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
            type="number"
            placeholder="123"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-colorLight3" htmlFor="cardName">
          Nombre de la tarjeta
        </label>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="text"
          placeholder="Juan Lopez"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-colorLight3">Dirección</p>
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
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="text"
          placeholder="Dirección 123 (Buenos Aires)"
        />
      </div>
      <Link
        className={`${hoverPointer} ${styleButtonBorder}`}
        href={"/OrderConfirmation"}
      >
        Confirmar el pago
      </Link>
    </form>
  );
}
