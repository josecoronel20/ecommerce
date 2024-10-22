import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("searchBar Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("renderiza campo de input", () => {
    render(<SearchBar />);
    const inputElement = screen.getByTestId("inputSearch");
    expect(inputElement).toBeInTheDocument;
  });

  it("renderiza el boton de busqueda cuando el input no esta focus", () => {
    render(<SearchBar />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).toBeInTheDocument;
  });

  it("actualiza el texto del input cuando se escribe", () => {
    render(<SearchBar />);
    const inputElement = screen.getByTestId("inputSearch");
    fireEvent.change(inputElement, { target: { value: "texto de prueba" } });

    expect(inputElement).toHaveValue("texto de prueba");
  });

  it("llama a router.push a la path correspondiente cuando se hace submit", () => {
    render(<SearchBar />);

    const inputElement = screen.getByTestId("inputSearch");
    fireEvent.change(inputElement, { target: { value: "texto de prueba" } });

    fireEvent.submit(inputElement)

    expect(mockPush).toHaveBeenCalledWith('/products/search/texto de prueba')
  });
});
