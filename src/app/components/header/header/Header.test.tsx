import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/react";
import Header from "./Header";
import Cart from "../cartComponents/cart/Cart";

describe("renderizado de componente header", () => {
  it("se espera que se rendericen los componentes hijos correctamente", () => {
    render(<Header />);
    render(<Cart />);

    expect(screen.getByRole("banner")).toBeInTheDocument;
    expect(screen.getByTestId("menu-nav")).toBeInTheDocument;
    expect(screen.getByTestId("logo")).toBeInTheDocument;
    // expect(screen.getByTestId("cart")).toBeInTheDocument;
    expect(screen.getByTestId("search-bar")).toBeInTheDocument;
  });
});
