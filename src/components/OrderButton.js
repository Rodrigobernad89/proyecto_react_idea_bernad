import React from 'react';
import { useContext,useState } from 'react';
import { CartContext } from '../context/cartContext';
import {addDoc, collection, getFirestore} from "firebase/firestore";



const OrderButton = ({comprador,total}) => {
    const {productosAgregados}=useContext(CartContext)
    

    const buyHandler = async () =>{
        const order={
            buyer:comprador,
            items:productosAgregados,
            Total:total
        }

        const db = getFirestore();

        const docRef = await addDoc(collection(db,"orders-store"),order).then(newOrder => alert("Tu orden fue hecha con exito.", newOrder.id))

        //console.log('order',order);
    }    
  return( 
        <div>
            <button className="botonAgregar"onClick={buyHandler}>Terminar compra</button>
        </div>
  )
}

export default OrderButton;
