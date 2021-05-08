import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

const ListaPropiedades = props => {
    return (
        <div className="lista-propiedades">
            {
                props.data.map((element,key) => {
                    return(
                        <Propiedad data={element} key={key} />
                    )
                })
            }

            
        </div>
    )
}


export default ListaPropiedades
