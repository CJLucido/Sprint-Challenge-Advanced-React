import React from 'react';
import './App.css';

import Display from "./components/Pages/Display"
import useSomething from "./hooks/useSomething"

function App() {

  const [whateverIWant, , handleIt, handleItBetter] = useSomething()

  return (
    <div >
      <h1 data-testid="header-display">Women's World Cup players</h1>
     
      <div>Number of <i>REAL</i> players
      {
        whateverIWant
      }
      </div>
      <button onClick={() => handleIt()}>There's only 1</button>
      <button onClick={() => handleItBetter(Number(whateverIWant))}>The majority are good</button>

      <Display/>
    </div>
  );
}

export default App;
