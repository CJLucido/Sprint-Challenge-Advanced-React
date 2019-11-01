import React from 'react';
import {render} from "@testing-library/react"
import App from "../../App"



it('checks for Display containing div', () => {
    const {getByTestId} = render(<App />)
    getByTestId( "display-container")
})