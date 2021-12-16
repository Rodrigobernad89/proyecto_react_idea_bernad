import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div>
            <li><a><FaShoppingCart/><span className="contador">0</span></a></li>     
        </div>
    )
}

export default CartWidget
