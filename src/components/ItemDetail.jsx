import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import CartContext from '../context/CartContext'

const ItemDetail = ({ id, title, subtitle, card, description, price, stock, img }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        addItem({ id, img, title, subtitle, description, card, price, quantity })
    };

    return (
        <div className="item-detail">
            <div className="left">
                <span className="titulo-detail">{title}</span>
                <span className="subtitulo-detail">{subtitle}</span>
                <span className="descripcion-detail">{description}</span>
                <span className="precio-detail">{price}</span>

                { quantity > 0 
                    ? <div className="post-agregar">
                        <Link to='/Carrito'>
                            <button className="ver-carrito">VER CARRITO</button>
                        </Link> 

                        <Link to='/'>
                            <button className="seguir-comprando">SEGUIR COMPRANDO</button>
                        </Link>
                      </div>
                    : <ItemCount stock={stock}  onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>
                }
            </div>

            <div className="right">
                <img src={img}/>
            </div>
        </div>
    )
}

export default ItemDetail