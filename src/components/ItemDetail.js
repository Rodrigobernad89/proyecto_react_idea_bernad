import React from 'react'

function ItemDetail({item}) {
    return (
        <div>
            <h2 className="tituloProductos">Detalle de Producto</h2>
            <div className="itemDetail"> 
                <div>
                    <img className="imagenDetalle" src={item.pictureUrl}/>
                </div>
                <div>
                    <h3 className="tituloDetalle"><strong>Titulo producto: </strong>{item.title}</h3>
                    <p className="descripcionProducto"><strong>Descripcion Producto:</strong> {item.description}</p>
                    <span className="precioDetalle"><strong>Precio: $</strong>{item.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
