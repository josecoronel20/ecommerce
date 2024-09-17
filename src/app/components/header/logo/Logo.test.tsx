import React from "react";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import Logo from "./Logo";

describe('Logo component', () => {
    test('render the correct text', () =>{
        render(<Logo/>);

        const logoElement = screen.getByTestId("logo");
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveTextContent("D.SHOP");

    })
})