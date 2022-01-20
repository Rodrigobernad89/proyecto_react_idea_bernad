import React from 'react'
import { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import {productos} from '../data/productos'
import {useParams} from 'react-router-dom'


import db from '../firebase/firebase';
import {getDoc,doc} from 'firebase/firestore'




function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    

    const { itemId } = useParams();

    

    useEffect(() => {
    const ref = doc(db,'products',itemId)
    getDoc(ref).then(querySnapshot => {
      setProduct({...querySnapshot.data(), id:querySnapshot.id})
    })
    .catch(e=>console.log(e))
  }, []);

  return  <div><ItemDetail producto={product} /></div>;
};


export default ItemDetailContainer





