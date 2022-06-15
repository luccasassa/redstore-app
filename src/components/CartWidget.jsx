import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return(
        <Link to={'/Carrito'} className="material-icons-outlined carrito" title='Carrito de compras'>shopping_cart
            <div className="contenido-mini">
                <div className="mini">
                    <span className="cantidad-total">{ quantity }</span>
                </div>
            </div>
        </Link>
    )
}

export default CartWidget
