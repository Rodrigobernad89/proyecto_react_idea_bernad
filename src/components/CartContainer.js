import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/cartContext';


function CartContainer() {
    const {contador,productosAgregados,clear,removeItem}=useContext(CartContext)
    


    return (
        <div>
            {productosAgregados.map(p=>
                <div>
                    <h4 className="titulo-detalle">{p.item.title}</h4>
                    <span className="contador">{p.quantity}</span>
                    <button onClick={removeItem}>Remover Producto</button>
                </div>     
            )}
            <button onClick={clear}>Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer
