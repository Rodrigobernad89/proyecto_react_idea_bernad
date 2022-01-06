import React from 'react'
import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {productos} from '../data/productos'
import {useParams} from 'react-router-dom'





function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    

    useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const misProductos = productos.find(item => item.id === itemId);
        console.log(misProductos)
        resolve(misProductos);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <h2>CARGANDO...</h2> : <div><ItemDetail producto={product} /></div>;
};


export default ItemDetailContainer





