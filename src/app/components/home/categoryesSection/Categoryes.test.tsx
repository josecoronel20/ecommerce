import React from "react";
import {screen, render} from "@testing-library/react"
import '@testing-library/jest-dom'
import Categoryes from "./Categoryes";

describe('renderizado de categoryes', () => {
    it('deberia renderizar correctamente los elementos de la seccion de categorias', () => {
        render(<Categoryes/> )

        //comprueba el renderizado de todas las imagenes
        const images = screen.getAllByRole('img')

        images.forEach((img) => {
            expect(img).toBeInTheDocument
        })

        //comprueba el renderuzadi de todos los titulos
        const titulos = screen.getAllByRole('heading', {level:3})

        titulos.forEach((titulo) => {
            expect(titulo).toBeInTheDocument
        })
    })
})