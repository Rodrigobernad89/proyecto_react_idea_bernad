import React from 'react'

function Item({producto}) {
    return (
        <div className="item">
            <strong>{producto.id}</strong>    
            <h2>{producto.title}</h2>
            <span>${producto.price}</span>
            <img className="imagenProducto"src={producto.pictureUrl}/>
        </div>
    )
}

export default Item
