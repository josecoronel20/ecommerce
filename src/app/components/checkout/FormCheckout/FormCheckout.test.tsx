import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormCheckout from "./FormCheckout";
import { useRouter } from "next/router";

//mock de useRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/orderConfirmation",
  }),
}));

describe("renderiza componente FromCheckout", () => {
  it("comprueba si se renderiza correctamente los elementos del formulario", () => {
    render(<FormCheckout />);

    expect(screen.getAllByText("Email")).toBeInTheDocument;
    expect(screen.getAllByText("Información de la tarjeta")).toBeInTheDocument;
    expect(screen.getAllByText("Nombre de la tarjeta")).toBeInTheDocument;
    expect(screen.getAllByRole("button")).toBeInTheDocument;
  });
});
