import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


import db from '../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

function ItemListContainer({greeting}) {
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true);
    const {cId}=useParams();

    useEffect(async() => {
        setLoading(true);
        
        const misProductos = cId ?         
        query(collection(db,'products'),where('category','==',cId))
        :
        collection(db,'products');
        try{
        const querySnapshot = await getDocs(misProductos)
        console.log(querySnapshot.docs)
        setItems(querySnapshot.docs.map(el =>{
          return {...el.data(),id:el.id}
        }))
        }catch{
          console.log("SE ROMPIO")
        }
        setLoading(false)
       /* getItems
          .then((res) => {
            setItems(res);
          })
          .finally(() => setLoading(false));*/
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



