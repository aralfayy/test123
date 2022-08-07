import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Pokedex from "./Pokedex/Pokedex";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Pokechild from "./Pokedex/Childpage/Pokechild";
import Cobapok from "./Pokedex/Childpage/Cobapok";
import Sorting from "./csvdat/Sorting";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/sorting" exact component={Sorting} />
        <Route path="/pokedex" exact component={Pokedex} />
        <Route path="/pokedex/:pokeName" component={Pokechild} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
