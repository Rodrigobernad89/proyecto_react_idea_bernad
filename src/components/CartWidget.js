import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/cartContext';

function CartWidget() {
    const {contador,productosAgregados,clear}=useContext(CartContext)
    

    return (
        <div>
            {productosAgregados.length>0
                ? <li><a><FaShoppingCart/><span className="contador">{productosAgregados.length}</span></a></li>
                : <li><a><FaShoppingCart/></a></li>
            }
        </div>
    )
}

export default CartWidget
