import React from "react";
import master from "../assets/img/master-poke.png"

export const Home = () => {
  return (
    <div className="home-pg">
      <h1>Bienvenido Maestro Pokemón!</h1>
      <img src={master} alt="Badge 3 Stars" className="img m-2" />
    </div>
  );
};