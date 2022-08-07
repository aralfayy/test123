import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Pokechild = () => {
  let { pokeId } = useParams();

  const pokemonData = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  const [pokelist, setPokelist] = useState([]);
  console.log(pokemonData);
  const getPokelist = async () => {
    const res = await fetch(pokemonData);
    const data = await res.json();

    setPokelist(data.results);
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
            <Link to={`/pokedex/${pokemonStats.name}`}>
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
      </div>
    </div>
  );
};

export default Pokechild;
