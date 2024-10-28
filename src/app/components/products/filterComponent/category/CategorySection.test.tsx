import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategorySection from "./CategorySection";

const mockSeter = jest.fn;
const mockIsInitialMount = { current: true };

describe("comprueba correcto funcionamiento de componente CategorySection", () => {
  test("comrpueba correcto renderizado de elementos", () => {
    render(
      <CategorySection seter={mockSeter} isInitialMount={mockIsInitialMount} />
    );
    const lis = screen.getAllByRole('listitem')

    expect(lis).toHaveLength(10);
  });
});
