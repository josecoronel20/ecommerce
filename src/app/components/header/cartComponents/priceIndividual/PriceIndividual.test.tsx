import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PriceIndividual from "./PriceIndividual";

describe('price individual', () => {
    it('debería renderizar correctamente el precio individual luego de ejecutar la funcion correctamente', () => {
        render(<PriceIndividual price={10} quantity={5}/>)

        expect(screen.getByText(/\$50(.00)?/)).toBeInTheDocument();
    })
})