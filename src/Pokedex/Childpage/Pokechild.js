import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  <img width={80} height={80} src={pokeDetails} alt="aiueo"></img>;
  console.log(pokeDetails);
  return (
    <div className="detailContainer">
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
          <div className="idPoke">#0{pokeDetails.id}</div>
          <div className="namaPoke">{pokeDetails.name}</div>
          <div className="typePoke">
            {pokeDetails &&
              pokeDetails.types &&
              pokeDetails.types.map((type) => (
                <div className={`${type.type.name} "typePokeEach"`}>
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
                  {stat.stat.name} : {stat.base_stat}
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
