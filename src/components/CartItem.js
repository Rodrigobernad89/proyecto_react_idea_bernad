import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom"
import { CartContext } from '../context/cartContext';



function CartItem({item,removeItem}) {

    const {clear}=useContext(CartContext)
    
    const removeHandler =()=>{
        removeItem(item.id)
    }

    return (
        <div>
            <div className='cartItem'>
                <h4 className="titulo-detalle">{item.title}</h4>
                <span className="contador">{item.quantity}</span>
                <span className=''>Total: {item.total}</span>
                <button className="botonAgregar"onClick={removeHandler}>Remover Producto</button>
            </div>
            
            
        </div>
    )
}

export default CartItem
