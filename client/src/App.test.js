import React from 'react';
import {render} from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
 
 render(<App />);
 
})
it('checks for App header', () => {
  const {getByTestId} = render(<App />)
  getByTestId( "header-display")
})