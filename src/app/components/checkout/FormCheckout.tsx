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
  const [mail, setMail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [cardName, setCardName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [form, setForm] = useState<string[]>([]);

  const handlerForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      mailRegex.test(mail) &&
      cardNumberRegex.test(cardNumber) &&
      cardDateRegex.test(cardDate)
    ) {
      setForm([
        mail,
        cardNumber,
        cardDate,
        cardPassword,
        cardName,
        country,
        address,
      ]);
    }
  };

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

  //regex
  const mailRegex = /^[\w._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const cardNumberRegex = /^\d{16}$/;
  const cardDateRegex = /^[0-9]{1,2}\/[0-9]{1,2}$/;
  const cardPasswordRegex = /^\d{3}$/;

  return (
    <form
      className="border-t border-colorLight2 flex flex-col gap-4 py-1"
      onSubmit={handlerForm}
    >
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <label className="font-medium text-colorDark1" htmlFor="email">
            Email
          </label>
          {!mailRegex.test(mail) && <p className="text-red-600 text-lg">*</p>}
        </div>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="emailExample123@hotmail.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="font-medium text-colorDark1">
            Información de la tarjeta
          </p>
          {!cardNumberRegex.test(cardNumber) ||
          !cardDateRegex.test(cardDate) ||
          !cardPasswordRegex.test(cardPassword) ? (
            <p className="text-red-600 text-lg">*</p>
          ) : null}
        </div>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="number"
          placeholder="1234 5678 1234 5678"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div className="grid gap-1 grid-cols-2">
          <input
            className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
            type="text"
            placeholder="12/34"
            value={cardDate}
            onChange={(e) => setCardDate(e.target.value)}
          />
          <input
            className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
            type="number"
            placeholder="123"
            value={cardPassword}
            onChange={(e) => setCardPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium text-colorDark1" htmlFor="cardName">
          Nombre de la tarjeta
        </label>
        <input
          className="bg-colorLight2 placeholder:text-colorLight3 rounded p-1"
          type="text"
          placeholder="Juan Lopez"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-colorDark1">Dirección</p>
        <select
          name="countryName"
          id="countryName"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {Object.keys(flagsNames).length > 0
            ? Object.entries(flagsNames).map(([code, country]) => {
                return (
                  <option key={code} value={country}>
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit">
        aa
        {/* <Link
          className={`${hoverPointer} ${styleButtonBorder}`}
          href={"/OrderConfirmation"}
        >
          Confirmar el pago
        </Link> */}
      </button>
    </form>
  );
}
