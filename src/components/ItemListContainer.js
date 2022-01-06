import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { productos } from '../data/productos';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


function ItemListContainer({greeting}) {
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true);
    const {cId}=useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
          setTimeout(() => {
            const misProductos = cId
              ? productos.filter((producto) => producto.category === cId)
              : productos;
    
            resolve(misProductos);
          }, 2000);
        });
    
        getItems
          .then((res) => {
            setItems(res);
          })
          .finally(() => setLoading(false));
      }, [cId]);
    
      return loading ? (
        <h2>CARGANDO...</h2>
      ) : (
        <>
          <h3>{greeting}</h3>
          <ItemList className="itemList"title="Lista de Productos" productos={items}/>
        </>
      );
    };

export default ItemListContainer



