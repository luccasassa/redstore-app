import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Categories from "./Categories"

const NavBar = () => {
    
    function darkmode() {
        const d = document
        const logo = d.querySelector(".logo")
        const tema = d.querySelector(".tema")

        if (!d.body.classList.contains("dark")) {
            d.body.classList.add("dark")
            localStorage.setItem('temaOscuro', 'true')
            tema.textContent = "light_mode"
            logo.src = "https://i.imgur.com/F8Vj4ZJ.png"
        
        } else {
            d.body.classList.remove("dark")
            localStorage.setItem('temaOscuro', 'false')
            tema.textContent = "bedtime"
            logo.src = "https://i.imgur.com/5GRUqAi.png"
        }
    }

    return (
        <header>
            {/* NAV TOP (GENERAL) */}
            <nav className="top">
                {/* NAV IZQUIERDA */}
                <div className="izq">
                    <Link to={'/'}>
                        <img className='logo' src="https://i.imgur.com/5GRUqAi.png" alt='logo'></img>
                    </Link>
                </div>

                {/* NAV DERECHA */}
                <div className="der">

                    {/* barra de búsqueda */}
                    <form>
                        <button type="submit" className="material-icons-outlined" title="Buscar">search</button>
                        <input type="search" placeholder="Buscar" required style={{textTransform: 'capitalize'}}></input>
                    </form>
                    
                    {/* dark/light mode */}
                    <button onClick={darkmode} className="material-icons-outlined tema" title="Cambiar modo">bedtime</button>

                    {/* carrito de compras */}
                    <CartWidget/>

                    <div className="account">
                        <Link to="#" id="open-login">Iniciar Sesión</Link>
                        <Link to="#" id="open-signin">Crear Cuenta</Link>
                    </div>
                </div>
            </nav>
            
            {/* NAV BOT (CATEGORIAS0) */}
            <Categories/>
        </header>
    )
}

export default NavBar