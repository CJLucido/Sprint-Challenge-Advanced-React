import React from 'react';
import {render} from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
 
 render(<App />);
 
})
;
describe('attributes', () => {
  it('checks for App header', () => {
    const {getByTestId} = render(<App />)
    getByTestId( "header-display")
  })
  it("uses the right url", ()=> {
    const app = window.location.href//interesting, this does not actually return :3000 like it does on the console
    expect(app).toEqual('http://localhost/')
  })
})