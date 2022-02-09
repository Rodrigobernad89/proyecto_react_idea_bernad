import React from 'react';
import { useState,useRef,useContext } from 'react/cjs/react.development';
import { CartContext } from '../context/cartContext';

function FormCart(props) {
    const{productosAgregados}=useContext(CartContext)
    
    const reference = useRef({})
  
    const formHandler = (event)=>{
        event.preventDefault();
        props.parentCallback({  
                                name:reference.current.name.value,
                                phone:reference.current.phone.value,
                                email:reference.current.email.value
                                }
                            )
    } 


  return <div>
        <h3>Comprador</h3> 
        <form className='formularioCarrito'>
        <label>Nombre</label>
                <input ref={el => reference.current.name = el} type="text" required />
                <label>Telefono</label>
                <input ref={el => reference.current.phone = el} type="text" required />
                <label>Email</label>
                <input ref={el => reference.current.email = el} type="email" required />
            <button className="botonAgregar" onClick={formHandler}>Cargar Datos</button>
        </form>
  </div>;
}

export default FormCart;
