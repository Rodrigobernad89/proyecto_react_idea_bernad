import React from 'react'
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <header>     
            <nav className="navBAr">
                <ul className="menuDeNavegacion">
                    <li><a href='#'>RB</a></li>  
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Quienes Somos</a></li>
                    <CartWidget/>
                </ul> 
            </nav> 
        </header> 
    )
}

export default NavBar
