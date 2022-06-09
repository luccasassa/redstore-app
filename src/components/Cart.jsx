import { useContext } from "react";
import CartContext from "../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito de compras</h1>

            <div className="carrito-container">
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className='producto-carrito'>
                            
                            <div className="carrito-izq">
                                <img src={prod.img}/>

                                <div className="izq-datos">
                                    <span className="carrito-titulo">{prod.card}</span>
                                    <span className="carrito-precio">${prod.price * prod.quantity}</span>
                                </div>
                            </div>

                            <div className="carrito-mid">
                                <span className="carrito-cantidad">x{prod.quantity}</span>
                            </div>

                            <button onClick={() => removeItem(prod.id)}>ELIMINAR</button>
                        </div>
                    )})
                }
            </div>
        </div>

    )
}

export default Cart