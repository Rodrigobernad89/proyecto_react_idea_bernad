import react, { useEffect } from 'react'
import { Link,NavLink } from "react-router-dom"
import React from 'react'
import ItemCount from './ItemCount'
import{useState} from 'react'


function ItemDetail({producto}) {
    const [added, setAdded] = useState(false)
    const onAdd= () =>{
        setAdded(true)
    }

    useEffect(()=>{
        console.log('added',added);
    },[added])

    return (
        <div>
            <h2 className="tituloProductos">Detalle de Producto</h2>
            <div className="itemDetail"> 
                <div>
                    <img className="imagenDetalle" src={producto.pictureUrl}/>
                </div>
                <div>
                    <h3 className="tituloDetalle"><strong>Titulo producto: </strong>{producto.title}</h3>
                    <p className="descripcionProducto"><strong>Descripcion Producto:</strong> {producto.descripcion}</p>
                    <span className="precioDetalle"><strong>Precio: $</strong>{producto.price}</span>
                    
                </div>
                
            </div>
            {!added &&
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
            
            }
            {added &&
                <NavLink to="/cart"><button className="botonAgregar" >Terminar compra</button></NavLink>

            }
        </div>
    )
}

export default ItemDetail
