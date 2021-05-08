import React from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'

const Propiedades = () => {
    return (
        <div className="contenedor">
            <Home title={"Casas en Bolivia"} data={lista} />
        </div>
    )
}

export default Propiedades
