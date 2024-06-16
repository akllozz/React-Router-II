import { Navbar } from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

import { Pokemons } from "./pages/Pokemons.jsx";
import { Details } from "./pages/Details.jsx";
import { Home } from "./pages/Home.jsx";

import Footer from "./components/Footer.jsx";
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;