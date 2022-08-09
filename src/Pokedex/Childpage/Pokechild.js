import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Pokechild.css";

const Cobapok = () => {
  const { pokeName } = useParams();
  const pokemonData = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const [pokeDetails, setPokeDetails] = useState([]);

  //fetchingdata
  const getPokeDetails = async () => {
    const res = await fetch(pokemonData);
    const data = await res.json();

    setPokeDetails(data);
  };

  useEffect(() => {
    getPokeDetails();
  }, []);

  return (
    <div className="detailContainer">
      <Link to="/" className="titlePoke">
        <h1>Maybank Pokedex</h1>
      </Link>
      <div className="detailCard">
        <div className="imagePoke">
          {pokeDetails && pokeDetails.sprites && pokeDetails.sprites.other && (
            <img
              width={200}
              height={200}
              src={pokeDetails.sprites.other.dream_world.front_default}
              alt="aiueo"
            ></img>
          )}
        </div>
        <div>
          <div className="idPoke"> #00{pokeDetails.id}</div>
          <div className="namaPoke">{pokeDetails.name}</div>
          <div className="typePoke">
            {pokeDetails &&
              pokeDetails.types &&
              pokeDetails.types.map((type) => (
                <div
                  className={`${type.type.name} + "typePokeEach"`}
                  style={{
                    borderRadius: "20px",
                    padding: "0.5rem 4rem",
                    textTransform: "capitalize",
                  }}
                >
                  {type.type.name}
                </div>
              ))}
          </div>
          <h3>Stats</h3>
          <div className="statsPoke">
            {pokeDetails &&
              pokeDetails.stats &&
              pokeDetails.stats.map((stat) => (
                <div>
                  <div className="statNumber">{stat.base_stat}</div>
                  {stat.stat.name.replace(/-/g, " ")}
                </div>
              ))}
          </div>
          <h3>Skills</h3>
          <div className="skillPoke">
            {pokeDetails &&
              pokeDetails.abilities &&
              pokeDetails.abilities.map((ability) => (
                <div className="skillPokeEach">{ability.ability.name}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cobapok;
