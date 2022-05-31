import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Categories from "./Categories"

const NavBar = () => {
    return (
        <header>
            {/* NAV TOP (GENERAL) */}
            <nav className="top">
                {/* NAV IZQUIERDA */}
                <div className="izq">
                    <Link to={'/'}>
                        <img className='logo' src="https://i.imgur.com/ZJWivtA.png"></img>
                    </Link>
                </div>

                {/* NAV DERECHA */}
                <div className="der">

                    {/* barra de búsqueda */}
                    <form>
                        <button type="submit" className="material-icons-outlined">search</button>
                        <input type="search" placeholder="Buscar producto.." required></input>
                    </form>

                    {/* carrito de compras */}
                    <CartWidget/>
                    
                    {/* dark/light mode */}
                    <button className="material-icons-outlined tema">bedtime</button>
                    <button className="material-icons-outlined tema">light_mode</button>

                    <div className="account">
                        {/* iniciar sesion + modal */}
                        <a href="#" id="open-login">Iniciar sesión</a>
                        {/* crear cuenta + modal */}
                        <a href="#" id="open-signin">Crear cuenta</a>
                    </div>
                </div>
            </nav>
            
            {/* NAV BOT (CATEGORIAS0) */}
            <Categories/>
        </header>
    )
}

export default NavBar