import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./poke.css";

const Pokedex = () => {
  const [pokemonURL, setpokemonURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=5"
  );
  //state next and previous page
  const [pokelist, setPokelist] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokelist = async () => {
    const res = await fetch(pokemonURL);
    const data = await res.json();

    async function setPokemonlist(results) {
      results.forEach(async (pokeDetails) => {
        const res = await fetch(pokeDetails.url);
        const data = await res.json();
        // console.log(data);

        // append data to existing pokelist element
        setPokelist((fetchedPokeDetails) => [...fetchedPokeDetails, data]);
      });
    }
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setPokemonlist(data.results);
    // console.log(data.results);
    pokelist.sort((a, b) => a.id - b.id);
    console.log(pokelist);
  };
  // console.log(pokelist);
  useEffect(() => {
    setPokelist([]);
    getPokelist();
  }, [pokemonURL]);

  // const style =
  //   pokelist.types +
  //    " pagination";

  return (
    <div className="appContainer">
      <h1>Maybank Pokedex</h1>
      <div className="pokeContainer">
        <div className="pagination">
          {pokelist &&
            pokelist.map((pokemonStats, i) => (
              <div key={i} className={`${pokemonStats.types[0].type.name}`}>
                <div className="pokeCard">
                  <Link
                    to={`/pokedex/${pokemonStats.name}`}
                    className="linkPoke"
                  >
                    <img
                      src={pokemonStats.sprites.other.dream_world.front_default}
                      alt="aiueo"
                    ></img>
                    <h3>{pokemonStats.name}</h3>
                    type={pokemonStats.types[0].type.name}
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div className="buttonNP">
          <div className="next">
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
          </div>
          <div className="previous">
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
    </div>
  );
};

export default Pokedex;
