import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
    return (
        <div>
            <p className="bienvenida">{greeting}</p>
            <ItemCount stock="5" initial="1"/>
            <ItemList className="itemList"title="Lista de Productos"/>
        </div>
    )
}

export default ItemListContainer
