import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Delete from "./Delete";

describe("Delete component", () => {
  const mockHandlerDelete = jest.fn();

  it("deberia renderizar correctamente el texto e icono", () => {
    render(<Delete productId={1} handlerDelete={mockHandlerDelete} />);

    expect(screen.getByRole("button")).toBeInTheDocument;
    expect(screen.getByText("Eliminar")).toBeInTheDocument;
  });

  it('deberia llamar a handlerDelete correctamente al ser clickeado' , ()=> {
    render(<Delete productId={1} handlerDelete={mockHandlerDelete}/>);

    fireEvent.click(screen.getByRole('button'));

    expect(mockHandlerDelete).toHaveBeenCalledWith(1);
    expect(mockHandlerDelete).toHaveBeenCalledTimes(1);
  })
});
