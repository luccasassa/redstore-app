import React from 'react'
import '../styles.css'
import logo from '../assets/logo-negro.png'

const NavBar = () => {
    return (
        <nav>
            {/* NAV IZQUIERDA */}
            <div className="izq">
                <a href="#"><img className='logo' src={logo}></img></a>
            </div>

            {/* NAV DERECHA */}
            <div className="der">

                {/* barra de búsqueda */}
                <form className="buscador">
                    <button type="submit" className="material-icons-outlined">search</button>
                    <input type="search" placeholder="Buscar producto.." required></input>
                </form>

                {/* carrito de compras + modal */}
                <button id="open-carrito" className="material-icons-outlined carrito">shopping_cart
                    <div className="contenido-mini">
                        <div className="mini">
                            <span className="cantidad-total">0</span>
                        </div>
                    </div>
                </button>
                
                {/* dark/light mode */}
                <button className="material-icons-outlined tema">light_mode</button>
                <button className="material-icons-outlined tema">bedtime</button>

                {/* iniciar sesion + modal */}
                <a href="#" id="open-login">Log In</a>

                {/* crear cuenta + modal */}
                <a href="#" id="open-signin">Sign In</a>
            </div>
        </nav>
    )
}

export default NavBar