import React, { useContext } from "react";
import "../styles/propiedades.css";
import logo from "../assets/star-solid.svg";
import PropiedadesContext from "./PropiedadesContext";

const Propiedad = (props) => {
  const theme = useContext(PropiedadesContext)
  return (
        <div className="propiedad">
          <img src={props.data.photo} className="photo" />
          <div className="detalles">
            {props.data.superHost && (
              <div className="host">
                <span className={`${theme}-super`}>SUPER HOST</span>
              </div>
            )}

            <span>{` ${props.data.type} ${props.data?.beds || 0} beds`}</span>
            <div>
              <img src={logo} className="logo" />
              <span>{props.data.rating}</span>
            </div>
          </div>
          <span className="title-propiedad">{props.data.title}</span>
        </div>
  );
};

export default Propiedad;
