import React from 'react'
import Item from '../components/Item'

function ItemList({title,productos}) {
    
    
    return (
        <div>
            <h2 className="tituloProductos">{title}</h2>
            <div className="itemList">
                {productos.map(p =>
                    <Item className="item" key={p.id}producto={p}/>    
                )}
            </div>
        </div>
    )
}

export default ItemList
