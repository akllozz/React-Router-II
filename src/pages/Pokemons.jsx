import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPokemons(results);

    } catch (error) {
      console.error("No hay Pokémons");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="pokemons-pg m-3">
        <h1>Selecciona un Pokemón</h1>
        <select
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-select pokemons-list"
        >
          <option value="" disabled defaultValue>
            Pokémons
          </option>
          {pokemons.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button
          onClick={() => navigate(`/pokemons/${name}`)}
          className="btn btn-dark m-3 btn-red"
        >
          Ver Detalles
        </button>
      </div>
    </>
  );
};