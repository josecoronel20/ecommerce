import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RatingSection from "./ratingSection";

const mockSetRating = jest.fn;

describe("comprueba renderizado del componente RatingSection", () => {
  it("comprueba si se renderizan los elementos del componente", () => {
    render(<RatingSection setRating={mockSetRating} />);

    const stars = screen.getAllByTestId("star");

    expect(stars.length).toBe(5);
  });
});
