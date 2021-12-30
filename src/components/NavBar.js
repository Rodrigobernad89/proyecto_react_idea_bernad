import React from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <header>     
            <nav className="navBAr">
                <ul className="menuDeNavegacion">
                    <Link className="links" to="/">RB</Link> |{" "}
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/category/:id">Productos</Link> 
                    <Link className="links" to="/category/:id">Quienes Somos</Link>|{" "}
                    <Link className="links" to="/cart"><CartWidget/></Link>
                </ul> 
            </nav> 
        </header> 
    )
}

export default NavBar
