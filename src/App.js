import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bodyContainer">
        <h1>Maybank Technical Assesment Test</h1>
        <p>Muhammad Ammar Al Fayyadh</p>
        <div className="cardProject">
          <ul>
            <Link to="/pokedex">Pokemon</Link>
          </ul>
          <ul>csv</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
