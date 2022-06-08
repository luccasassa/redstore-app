import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({title, subtitle, description, price, stock, img}) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity);
    };

    return (
        <div className="item-detail">
            <div className="left">
                <span className="titulo-detail">{title}</span>
                <span className="subtitulo-detail">{subtitle}</span>
                <span className="descripcion-detail">{description}</span>
                <span className="precio-detail">{price}</span>

                {/* <ItemCount stock={stock} initial={1} /> */}
                {quantity > 0
                    ? <Link to='/Carrito'>
                        <button className="ver-carrito">VER CARRITO</button>
                        </Link>
                    : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    }
            </div>

            <div className="right">
                <img src={img}/>
            </div>
        </div>
    )
}

export default ItemDetail