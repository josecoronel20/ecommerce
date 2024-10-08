import React from "react";
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Stars from "./Stars";

const mockupStars = 4

describe('renderiza componente stars', () =>{
    render(<Stars rating={mockupStars}/>)

    expect(screen.getByTestId('star-yellow-1')).toBeInTheDocument
    expect(screen.getByTestId('star-yellow-2')).toBeInTheDocument
    expect(screen.getByTestId('star-yellow-3')).toBeInTheDocument
    expect(screen.getByTestId('star-yellow-4')).toBeInTheDocument
    expect(screen.getByTestId('star-grey-5')).toBeInTheDocument
})