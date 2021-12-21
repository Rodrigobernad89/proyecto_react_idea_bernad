import React from 'react'
import {useState} from 'react'
import barra from '../assets/images/barra.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



function ItemCount({stock,initial}) {
    const [counter, setCounter] = useState(parseInt(initial));
    
    function handleIncrement(){
        setCounter(counter >= stock ? stock : counter + 1);
    }

    function handleDecrement(){
        setCounter(counter <=0 ? 0 : counter - 1);
    }

    return (
        <div>
            <div> 
            <h2 className="tituloProducto">Barra de musculacion</h2>
            <img className="imagenProducto" src={barra}/>
            </div>
            <button className='botonRestar' onClick={handleDecrement}><FaMinus/></button>
            <span className="contador">{counter}</span>
            <button className='botonSumar' onClick={handleIncrement}><FaPlus/></button>
            <div>
                <button className="botonAgregar"onClick={()=>{console.log(`Se agrego ${counter} item del producto al carrito`)}}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
