import React from 'react'
import {useState,useContext} from 'react'
import barra from '../assets/images/barra.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CartContext } from '../context/cartContext';


function ItemCount({stock,initial,onAdd}) {
    const{contador}  = useContext(CartContext)   
    function handleIncrement(){
        contador.setCounter(parseInt(contador.counter >= stock ? stock : contador.counter + 1));
    }

    function handleDecrement(){
        contador.setCounter(contador.counter <=0 ? 0 : contador.counter - 1);
    }

    return (
        <div className="contenedorCounter">         
            <button className='botonRestar' onClick={handleDecrement}><FaMinus/></button>
            <span className="contador">{contador.counter}</span>
            <button className='botonSumar' onClick={handleIncrement}><FaPlus/></button>
            <div>
                <button className="botonAgregar"onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
