import react, { createContext, useEffect } from 'react'
import { Link,NavLink } from "react-router-dom"
import React from 'react'
import ItemCount from './ItemCount'
import{useState, useContext} from 'react'
import { CartContext } from '../context/cartContext';

function ItemDetail({producto}) {
    const{id,title,pictureUrl,descripcion,price,stock}=producto
    const [added, setAdded] = useState(false)
    const {addItem,productosAgregados,contador} = useContext(CartContext)
    
    const clickHandler=(e)=>{
        addItem({id,title,price,quantity:contador.counter})
    }    

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
                    <img className="imagenDetalle" src={pictureUrl}/>
                </div>
                <div>
                    <h3 className="tituloDetalle"><strong>Titulo producto: </strong>{title}</h3>
                    <p className="descripcionProducto"><strong>Descripcion Producto:</strong> {descripcion}</p>
                    <span className="precioDetalle"><strong>Precio: $</strong>{price}</span>
                    
                </div>
                
            </div>
            {!added &&
                <ItemCount stock={stock} initial="1" onAdd={onAdd} producto={producto}/>
            
            }
            {added &&
                <NavLink to="/cart"><button className="botonAgregar" onClick={clickHandler}>Terminar compra</button></NavLink>

            }
        </div>
    )
}

export default ItemDetail
