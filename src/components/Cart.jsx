import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, removeItem, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    const quantity = getQuantity()

    return (
        <div>
            <h1>Carrito de compras</h1>

            {quantity > 0
            ?
                <div className="carrito-container">
                    <div className="productos-carrito">
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

                    <div className="cantidades-totales-carrito">
                        <div className="cantidades-texto">
                            <span>Productos:</span>
                            <span>Precio total:</span>
                        </div>

                        <div className="cantidades-numeros">
                            <span className="cantidad-total">{quantity}</span>
                            <span className="precio-total">{totalPrice()}</span>
                        </div>
                    </div>

                    <div className="acciones-carrito">
                        <button className="vaciar-carrito" onClick={vaciar}>VACIAR CARRITO</button>
                        <Link to={'/Formulario'}><button className="confirmar-compra">CONFIRMAR COMPRA</button></Link>
                    </div>
                </div>
            :
                <span className="carrito-vacio">SU CARRITO ESTÁ VACÍO</span>
            }
        </div>

    )
}

export default Cart