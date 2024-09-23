import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

describe("renderiza componente hero", () => {
  it("comprueba que se rendericen todos los elementos correctamente", () => {
    render(<Hero />);

    expect(screen.getAllByRole("img")).toBeInTheDocument;
    expect(screen.getAllByText("Nueva colección de fragancias"))
      .toBeInTheDocument;
    expect(
      screen.getAllByText(
        "Perfúmes exclusivos para la temporada, elegancia en cada detalle"
      )
    ).toBeInTheDocument;
    expect(screen.getAllByText("EXPLORA LA COLECCIÓN")).toBeInTheDocument;
  });
});
