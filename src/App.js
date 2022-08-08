import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bodyContainer">
        <img
          src="https://www.maybank.co.id/Assets/img/maybank-logo.svg"
          alt="logo"
        />
        <h1>Maybank Technical Assesment Test</h1>
        <h2>Muhammad Ammar Al Fayyadh</h2>

        <div className="cardProject">
          <Link to="/pokedex">
            {/* <div className="linkCard">
              <p>Enter Your PokeDex</p>
            </div> */}

            <img
              width={100}
              height={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
              alt="pokeball"
            />
          </Link>
        </div>
        <i className="arrow up"></i>
        <p>Press Pokeball to Enter your Pokedex</p>
      </div>
    </div>
  );
}

export default App;
