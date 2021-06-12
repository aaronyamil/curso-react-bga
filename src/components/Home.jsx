import React, { useEffect, useState } from "react";
import ListaPropiedades from "./ListaPropiedades";
import "../styles/home.css";
import PropiedadesContext from "./PropiedadesContext";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";

const Home = (props) => {
  const [lista, setLista] = useState(props.data);

  useEffect(() => {
    setLista(props.data);
  }, [props]);

  const handleClick = (e) => {
    console.log("click" + e.target.value);
    if (e.target.value === "reset") setLista(props.data);
    else
      setLista(props.data.filter((element) => element.beds > e.target.value));
  };
  return (
    <PropiedadesContext.Provider value={"theme1"}>
      <div className="container-home">
        <div className="container-title">
          <span className="title-header">{props.title}</span>
          Beds:
          <input type="button" onClick={handleClick} value="1" />
          <input type="button" onClick={handleClick} value="3" />
          <input type="button" onClick={handleClick} value="6" />
          <input type="button" onClick={handleClick} value="reset" />
          <span className="count">{`${lista.length}+ stays`}</span>
        </div>
        <Switch>
          <Route exact path="/" render={() => <ListaPropiedades data={lista} />} />

          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </div>
    </PropiedadesContext.Provider>
  );
};

export default Home;
