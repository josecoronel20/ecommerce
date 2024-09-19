import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from "./Cart";

describe('renderiza componente Cart', () => {
    it('deberia renderizar correctamente los elementos del cart', () => {
        render(<Cart/>)
        
        const cartButton = screen.getByRole("button")
        expect(cartButton).toBeInTheDocument
    })

    it('deberia abrir el cart al ser clickeado y renderizar contenido', () => {
        render(<Cart/>)

        const button= screen.getByRole("button")
        const modal = screen.getByRole("section")
        
        //simula el click en el icono de cart
        fireEvent.click(button);

        //se espera que se abra el modal de el cart al clickear el icono
        expect(modal).toBeInTheDocument
        
        //se espera que se renderice los textos del modal
        expect(screen.getByText("Carrito")).toBeInTheDocument
        expect(screen.getByText("PRODUCTO")).toBeInTheDocument
        expect(screen.getByText("CANTIDAD")).toBeInTheDocument
        expect(screen.getByText("PRECIO")).toBeInTheDocument
        expect(screen.getByText("Proceder al pago")).toBeInTheDocument

        //se 
    })
})