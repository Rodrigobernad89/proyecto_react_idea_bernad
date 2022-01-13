import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/cartContext';

function CartWidget() {
    const {contador,productosAgregados,clear}=useContext(CartContext)
    

    return (
        <div>
           <li><a><FaShoppingCart/><span className="contador">{contador.counter}</span></a></li>
        </div>
    )
}

export default CartWidget
