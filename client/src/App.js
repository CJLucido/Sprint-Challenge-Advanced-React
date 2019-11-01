import React from 'react';
import './App.css';

import Display from "./components/Pages/Display"

function App() {
  return (
    <div >
      <h1 data-testid="header-display">Women's World Cup players</h1>
      <Display/>
      
    </div>
  );
}

export default App;
