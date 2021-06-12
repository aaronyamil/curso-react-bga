import React from "react";
import Home from "../components/Home";
import "../styles/main.css";
import { lista } from "../assets/lista";
import {Link} from "react-router-dom"

const Propiedades = () => {
  return (
    <div className="contenedor">
      <header>
        <div>
          <Link to="/">Home</Link> <br />
          <Link to="/about">About</Link>
        </div>
      </header>
      <Home title={"Casas en Bolivia"} data={lista} />
    </div>
  );
};

export default Propiedades;
