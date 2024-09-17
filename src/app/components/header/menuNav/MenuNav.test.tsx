import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import MenuNav from './MenuNav'

describe('MenuNav component', () => {
    it('deberia renderizar correctamente los elementos de navegacion', () => {
        render (<MenuNav/>);

        expect(screen.getByText('Inicio')).toBeInTheDocument
        expect(screen.getByText('Productos')).toBeInTheDocument
        expect(screen.getByText('Contacto')).toBeInTheDocument
        expect(screen.getByText('Ofertas')).toBeInTheDocument
        expect(screen.getByText('Nueva Colección')).toBeInTheDocument
    })

    it('deberia abrir y cerrar el menú al hacer click en él', () => {
        render(<MenuNav/>);

        //verifica que el nav se mantenga oculto inicialmente
        const Nav = screen.getByRole('navigation')
        expect(Nav).toHaveClass('-translate-y-full')

        //simula el click en el menu
        const MenuButton = screen.getByRole('button')
        fireEvent.click(MenuButton);

        //verifica que el menu se abre
        expect(Nav).not.toHaveClass('-translate-y-full')

        //simula otro click
        fireEvent.click(MenuButton)

        //verifica que el menu se oculta nuevamente
        expect(Nav).toHaveClass('-translate-y-full')
    })
})