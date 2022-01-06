import React from 'react'

function ItemDetail({producto}) {
    return (
        <div>
            <h2 className="tituloProductos">Detalle de Producto</h2>
            <div className="itemDetail"> 
                <div>
                    <img className="imagenDetalle" src={producto.pictureUrl}/>
                </div>
                <div>
                    <h3 className="tituloDetalle"><strong>Titulo producto: </strong>{producto.title}</h3>
                    <p className="descripcionProducto"><strong>Descripcion Producto:</strong> {producto.description}</p>
                    <span className="precioDetalle"><strong>Precio: $</strong>{producto.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
