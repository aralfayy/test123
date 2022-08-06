import React, { useState, useEffect, useCallback } from "react";
import Pokecard from "./components/Pokecard";
import "./poke.css";

const Pokedex = () => {
  const pokemonData = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
  const [pokelist, setPokelist] = useState([]);
  const [fetchedPokelist, setFetchedPokelist] = useState([]);

  const getPokelist = async () => {
    const res = await fetch(pokemonData);
    const data = await res.json();

    function setPokemonlist(results) {
      results.forEach(async (pokeDetails) => {
        const res = await fetch(pokeDetails.url);
        const data = await res.json();
        console.log(data);
        // append data to existing pokelist element

        setPokelist((fetchedPokeDetails) => [...fetchedPokeDetails, data]);
        await pokelist.sort((a, b) => a.id - b.id);
      });
    }

    setPokemonlist(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    getPokelist();
  }, []);

  return (
    <div className="appContainer">
      <h1>Maybank Pokedex</h1>
      <div className="pokeContainer">
        <div className="pagination">
          {pokelist.map((pokemonStats) => (
            <div className="pokeCard">
              <p>#0{pokemonStats.id}</p>
              <img
                width={80}
                height={80}
                src={pokemonStats.sprites.other.dream_world.front_default}
              ></img>
              <h3>{pokemonStats.name}</h3>
              type={pokemonStats.types[0].type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
