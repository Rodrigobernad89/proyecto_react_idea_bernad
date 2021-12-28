import React from 'react'
import ItemDetail from './ItemDetail'
import barra from '../assets/images/barra.jpg'
import { useState,useEffect } from 'react'

function ItemDetailContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
    },[])

    const getItems = () => {
        const getPromise = new Promise( (res, rej) => {
            const items = [
                {
                    id:1,
                    title:"Barra Cromada",
                    description:"Barra cromada olimpica de 20 kg para musculacion",
                    price:10000,
                    pictureUrl:barra
                },
            ]

            setTimeout( () => {
                res(items)
            }, 2000);
            
        })
        getPromise.then( res => setItems(res))
    }

    return (
        <div>
            <div>
                {items.map(i =>
                    <ItemDetail item={i}/>
                )
                    
                }
            </div>           
        </div>
    )
}

export default ItemDetailContainer
