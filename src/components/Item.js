import React from 'react'
import { Link } from "react-router-dom"

function Item({producto}) {
    return (
        <div className="item">    
            <h2>{producto.title}</h2>
            <span>${producto.price}</span>
            <Link className="links" to={`/productos/${producto.id}`}><img className="imagenProducto"src={producto.pictureUrl}/></Link>
        </div>
    )
}

export default Item
