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
                        <img className='logo' src="https://i.imgur.com/5GRUqAi.png"></img>
                    </Link>
                </div>

                {/* NAV DERECHA */}
                <div className="der">

                    {/* barra de búsqueda */}
                    {/* <form>
                        <button type="submit" className="material-icons-outlined">search</button>
                        <input type="search" placeholder="Buscar producto.." required></input>
                    </form> */}
                    
                    {/* dark/light mode */}
                    <button className="material-icons-outlined tema">bedtime</button>
                    {/* <button className="material-icons-outlined tema">light_mode</button> */}

                    {/* carrito de compras */}
                    <CartWidget/>

                    {/* <div className="account">
                        <a href="#" id="open-login">Iniciar sesión</a>
                        {<a href="#" id="open-signin">Crear cuenta</a>}
                    </div> */}
                </div>
            </nav>
            
            {/* NAV BOT (CATEGORIAS0) */}
            <Categories/>
        </header>
    )
}

export default NavBar