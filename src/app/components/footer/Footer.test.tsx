import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("renderizado de footer", () => {
  it("deberia renderizar correctamente los elementos del footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("logo")).toBeInTheDocument;

    const lis = screen.getAllByRole("li");
    expect(lis.length).toBe(6)

    lis.forEach((li) => {
      expect(li).toBeInTheDocument;
    });
  });
});
