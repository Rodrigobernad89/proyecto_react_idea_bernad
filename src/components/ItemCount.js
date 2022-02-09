import React from 'react'
import {useState,useContext} from 'react'
import barra from '../assets/images/barra.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { CartContext } from '../context/cartContext';


function ItemCount({stock,initial,onAdd}) {
    const [counter, setCounter] = useState([0])
    function handleIncrement(){
        setCounter(parseInt(counter >= stock ? stock : counter + 1));
    }

    function handleDecrement(){
        setCounter(counter <=0 ? 0 : counter - 1);
    }

    return (
        <div className="contenedorCounter">         
            <button className='botonRestar' onClick={handleDecrement}><FaMinus/></button>
            <span className="contador">{counter}</span>
            <button className='botonSumar' onClick={handleIncrement}><FaPlus/></button>
            <div>
                <button className="botonAgregar"onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
