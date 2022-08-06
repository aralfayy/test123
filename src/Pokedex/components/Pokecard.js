import React from "react";
import Pokedex from "../Pokedex";
import "../poke.css";

const Pokecard = (id, name, image, types) => {
  const style = types + " thumb-container";
  return (
    <div>
      test
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {types}</small>
      </div>
    </div>
  );
};

export default Pokecard;
