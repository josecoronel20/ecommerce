import React from "react";
import {screen, render} from "@testing-library/react"
import '@testing-library/jest-dom'
import CategoryesHome from "./CategoryesHome";

describe('renderizado de categoryes', () => {
    it('deberia renderizar correctamente los elementos de la seccion de categorias', () => {
        render(<CategoryesHome/> )

        //comprueba el renderizado de todas las imagenes
        const images = screen.getAllByRole('img')

        images.forEach((img) => {
            expect(img).toBeInTheDocument
        })

        //comprueba el renderuzadi de todos los titulos
        const titulos = screen.getAllByRole('heading', {level:3})

        expect(titulos.length).toBe(5)

        titulos.forEach((titulo) => {
            expect(titulo).toBeInTheDocument
        })
    })
})