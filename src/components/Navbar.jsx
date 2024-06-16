import React from "react";
import { NavLink } from "react-router-dom";
import pokeBall from "../assets/img/pokemon_icon.png";

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between nav-fondo p-3">
      <NavLink to="/">
        <img src={pokeBall} alt="Pokéball Phone" className="img-icon" />
      </NavLink>

      <div className="d-flex gap-3">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to={"/pokemons"}
        >
          Pokémons
        </NavLink>
      </div>
    </nav>
  );
};