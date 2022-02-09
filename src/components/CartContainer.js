import React, { useContext,useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom"
import { CartContext } from '../context/cartContext';
import CartItem from './CartItem';
import CartWidget from './CartWidget';
import OrderButton from './OrderButton';
import FormCart from './FormCart';

function CartContainer() {
    const {productosAgregados,removeItem,clear}=useContext(CartContext) 
    const [buyer, setBuyer] = useState({})

    const handleCallback = (childData) =>{
        setBuyer(childData)
    }
    
    
    const reducerTotal= (accumulator, currentValue)=>accumulator+ currentValue;

    const totalPrice = productosAgregados.map(producto=>producto.total).reduce(reducerTotal,0);

    return (
        <div>
            <h1>Carrito</h1>
            <div className='cart'>
                    {productosAgregados.length>0
                        ?productosAgregados.map((p)=>
                            <div >
                                <CartItem key={p.id} item={p} removeItem={removeItem}/>
                                
                                
                            </div>
                        
                        )
                        :<div>
                            <h2>No Hay Productos en el Carrito</h2>
                            <NavLink to="/" ><button className="botonAgregar">Ir a Comprar</button>  </NavLink>
                        </div>
                    }
                    {productosAgregados.length>0?
                        <div>
                            <div>
                                <span>Total :{totalPrice}</span>
                            </div>
                            
                        </div>
                        : ""
                    }
                    
                
                <FormCart parentCallback = {handleCallback}/>
            </div>
            <div className='cartButtons'>
                        <button  className="botonAgregar" onClick={clear}>Vaciar Carrito</button>
                        <OrderButton comprador = {buyer} total={totalPrice}/>
            </div>
        </div>
    )
}

export default CartContainer
