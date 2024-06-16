import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export const Details = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(URL + name);
      const results = await response.json();
      setPokemon(results);

    } catch (error) {
      console.error("No hay Pokémon");
    }
  };

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="cuadro-dets m-4">
          <img
            src={pokemon?.sprites?.front_default}
            className="img-dets-poke"
            alt="Pokemon"
          />
          <div>
            <h3 className="text-center">{pokemon?.name}</h3>

            <ul className="list-pk">
              {pokemon?.stats?.map((item, index) => (
                <li key={index}>
                  {item.stat.name} : {item.base_stat}
                </li>
              ))}
            </ul>

            <div className="d-flex justify-content-center">
                type: &nbsp;
               {pokemon?.types?.map((item, index) => (
                <span key={index}>{item.type.name} &nbsp;</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};