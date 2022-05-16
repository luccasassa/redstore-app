import React from 'react'
import '../styles/general.scss'
/* probablemente la navbar tambien sea importada a otro componente padre y esta linea borrada */
import logo from '../assets/logo/logo-negro.png'
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            {/* NAV IZQUIERDA */}
            <div className="izq">
                <a href="#">
                    <img className='logo' src={logo}></img>
                </a>
            </div>

            {/* NAV DERECHA */}
            <div className="der">

                {/* barra de búsqueda */}
                <form className="buscador">
                    <button type="submit" className="material-icons-outlined">search</button>
                    <input type="search" placeholder="Buscar producto.." required></input>
                </form>

                {/* carrito de compras */}
                <CartWidget/>
                
                {/* dark/light mode */}
                <button className="material-icons-outlined tema">bedtime</button>
                <button className="material-icons-outlined tema">light_mode</button>

                {/* iniciar sesion + modal */}
                <a href="#" id="open-login">Log In</a>

                {/* crear cuenta + modal */}
                <a href="#" id="open-signin">Sign In</a>
            </div>
        </nav>
    )
}

export default NavBar