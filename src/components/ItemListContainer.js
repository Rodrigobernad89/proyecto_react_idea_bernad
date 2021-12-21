import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer({greeting}) {
    return (
        <div>
            <p className="bienvenida">{greeting}</p>
            <ItemCount stock="5" initial="1"/>
        </div>
    )
}

export default ItemListContainer
