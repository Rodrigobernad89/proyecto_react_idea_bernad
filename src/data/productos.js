import barra from '../assets/images/barra.jpg'
import mancuerna from '../assets/images/mancuernas.jpg'
import soga from '../assets/images/sogas.jpg'


export const productos = [
    {
        id:"1",
        title:"Barra Cromada",
        category:"Barras",
        price:10000,
        descripcion:"Barra cromada para Musculacion",
        pictureUrl:barra,
        stock:10
    },
    {
        id:"2",
        title:"Mancuernas",
        category:"Mancuernas",
        price:3000,
        descripcion:"Mancuerna cromada para Musculacion",
        pictureUrl:mancuerna,
        stock:5
    },
    {
        id:"3",
        title:"Soga Crossfit",
        category:"Crossfit",
        price:1000,
        descripcion:"Sogas de 10mm para crossfit",
        pictureUrl:soga,
        stock:3
    }
]
