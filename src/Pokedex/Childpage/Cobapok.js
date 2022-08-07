import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  <img width={80} height={80} src={pokeDetails} alt="aiueo"></img>;

  return (
    <div>
      <div>
        hai {pokeDetails.name}
        {/* {pokeDetails.sprites.front_default} */}
        {pokeDetails &&
          pokeDetails.abilities &&
          pokeDetails.abilities.map((ability) => (
            <div>{ability.ability.name}</div>
          ))}
        {pokeDetails && pokeDetails.sprites && pokeDetails.sprites.other && (
          <img
            width={200}
            height={200}
            src={pokeDetails.sprites.other.dream_world.front_default}
            alt="aiueo"
          ></img>
        )}
      </div>
    </div>
  );
};

export default Cobapok;
