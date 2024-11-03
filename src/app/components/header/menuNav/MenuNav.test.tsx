import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuNav from './MenuNav'

describe('MenuNav component', () => {
    it('deberia renderizar correctamente los elementos de navegacion', () => {
        render (<MenuNav/>);

        expect(screen.getAllByText('Inicio')).toBeInTheDocument
        expect(screen.getAllByText('Productos')).toBeInTheDocument
        expect(screen.getAllByText('Ofertas')).toBeInTheDocument
        expect(screen.getAllByText('Nueva Colección')).toBeInTheDocument
    })

    it('deberia abrir y cerrar el menú al hacer click en él', () => {
        render(<MenuNav/>);

        //verifica que el nav se mantenga oculto inicialmente
        const containerUlMobile = screen.getByTestId('container-ul-mobile')
        expect(containerUlMobile).toHaveClass('-translate-y-full')

        //simula el click en el menu
        const MenuButton = screen.getByRole('button')
        fireEvent.click(MenuButton);

        //verifica que el menu se abre
        expect(containerUlMobile).not.toHaveClass('-translate-y-full')

        //simula otro click
        fireEvent.click(MenuButton)

        //verifica que el menu se oculta nuevamente
        expect(containerUlMobile).toHaveClass('-translate-y-full')
    })
})