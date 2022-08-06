import React, { useState, useEffect, useCallback } from "react";
import Pokecard from "./components/Pokecard";
import "./poke.css";

const Pokedex = () => {
  const pokemonData = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;
  const [pokelist, setPokelist] = useState([]);
  const [fetchedPokelist, setFetchedPokelist] = useState([]);

  const getPokelist = async () => {
    const res = await fetch(pokemonData);
    const data = await res.json();

    const getPokeDetails = async () => {
      pokelist.forEach(async (pokeDetails) => {
        const res = await fetch(pokeDetails.url);
        const data = await res.json();
        console.log(data);
        // append data to existing pokelist element
        let fetchedPokeDetails = {
          ...pokeDetails,
          ...data,
        };
        setFetchedPokelist((fetchedPokelist) => [
          ...fetchedPokelist,
          fetchedPokeDetails,
        ]);
      });
    };
    getPokeDetails(data.results);
  };

  useEffect(() => {
    getPokelist();
  }, []);

  return (
    <div className="appContainer">
      <h1>Maybank Pokedex</h1>
      <div className="pokeContainer">
        <div className="pagination">
          <h1>{pokelist.name}</h1>

          {/* {pokelist.map((pokemonMap, index) => (
            <Pokecard
              key={index}
              id={pokemonMap.id}
              image={pokemonMap.sprites.other.dream_world.front_default}
              name={pokemonMap.name}
              type={pokemonMap.types[0].type.name}
            />
          ))} */}
        </div>
      </div>
      {/* <button onClick={() => getPokemon()}> Load More</button> */}
    </div>
  );
};

export default Pokedex;
