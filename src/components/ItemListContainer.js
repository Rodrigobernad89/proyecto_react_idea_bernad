import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import barra from '../assets/images/barra.jpg'
import mancuerna from '../assets/images/mancuernas.jpg'
import soga from '../assets/images/sogas.jpg'
import { useState,useEffect } from 'react'


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
    },[])

    const getProductos = () => {
        const getPromise = new Promise( (res, rej) => {
            const productos = [
                {
                    id:1,
                    title:"Barra Cromada",
                    price:10000,
                    pictureUrl:barra
                },
                {
                    id:2,
                    title:"Mancuernas",
                    price:3000,
                    pictureUrl:mancuerna
                },
                {
                    id:3,
                    title:"Soga Crossfit",
                    price:1000,
                    pictureUrl:soga
                }
            ]

            setTimeout( () => {
                res(productos)
            }, 2000);
            
        })
        getPromise.then( res => setProductos(res))
        
    }

    return (
        <div>
            <p className="bienvenida">{greeting}</p>
            {/*<ItemCount stock="5" initial="1"/>*/}
            <ItemList className="itemList"title="Lista de Productos" productos={productos}/>
        </div>
    )
}

export default ItemListContainer
