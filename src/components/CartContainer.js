import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom"
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';
import CartWidget from './CartWidget';


function CartContainer() {
    const {productosAgregados,removeItem,clear}=useContext(CartContext)
    
    return (
        <div>
            <h1>Carrito</h1>
            {productosAgregados.length>0
                ?productosAgregados.map((p)=>
                    <div>
                        <CartItem key={p.id} item={p} removeItem={removeItem}/>
                        
                        
                    </div>
                
                )
                :<div>
                    <h2>No Hay Productos en el Carrito</h2>
                    <NavLink to="/" ><button>Ir a Comprar</button>  </NavLink>
                </div>
            }
            {productosAgregados.length>0?
                <div>
                    <div>
                        <span>Total :</span>
                    </div>
                    <button onClick={clear}>Vaciar Carrito</button>
                </div>
                : ""
            }
        </div>
    )
}

export default CartContainer
