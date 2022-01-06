import React from 'react'
import { Link,NavLink } from "react-router-dom"
import CartWidget from './CartWidget'
const NavBar = () => {
    const categorias =[
        { id:"1", direccion: "/",text:"RB"},
        { id:"2", direccion: "/",text:"Home"},
        { id:"3", direccion: "/category/Barras",text:"Barras"},
        { id:"4", direccion: "/category/Mancuernas",text:"Mancuernas"},
        { id:"5", direccion: "/category/Crossfit",text:"Crossfit"},
        { id:"6", direccion: "/cart",text:<CartWidget/>}
    ]
    return (
        <header>     
            <nav className="navBAr">
                <ul className="menuDeNavegacion">
                {categorias.map((c)=>{
                    return(
                        <li key={c.id}>
                            <NavLink
                                to={c.direccion}
                                className="links"
                            >
                                {c.text}
                            </NavLink>

                        </li>
                    )
                })
                } 
                </ul>
            </nav> 
        </header> 
    )
}

export default NavBar
