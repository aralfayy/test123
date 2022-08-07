import React, { useState, useEffect, useCallback } from "react";
import Pokecard from "./components/Pokecard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./poke.css";

const Pokedex = () => {
  const pokemonData = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;
  // const pokeNext = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${lastID}`;
  const [pokemonURL, setpokemonURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=5"
  );

  const [pokelist, setPokelist] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokelist = async () => {
    const res = await fetch(pokemonURL);
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
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setPokemonlist(data.results);
    // console.log(data.results);
  };

  useEffect(() => {
    getPokelist();
  }, [pokemonURL]);

  return (
    <div className="appContainer">
      <h1>Maybank Pokedex</h1>
      <div className="pokeContainer">
        <div className="pagination">
          {pokelist.map((pokemonStats) => (
            <Link to={`/pokedex/${pokemonStats.id}`}>
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
            </Link>
          ))}
        </div>

        <div className="btn-group">
          {prevUrl && (
            <button
              onClick={() => {
                setPokelist([]);
                setpokemonURL(prevUrl);
              }}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => {
                setPokelist([]);
                setpokemonURL(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
