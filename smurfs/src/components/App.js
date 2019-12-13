import React from "react";
import "./App.css";


import Village from './Village';
import NewSmurf from './NewSmurf';



function App() {
  return (
    <div className="App">
      <h1>Smurfs</h1>
      <NewSmurf/>
      <Village />
    </div>
  );
}

export default App;
