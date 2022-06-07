import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({titulo,subtitulo,descripcion, precio, stock, img}) => {

    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (quantity) => {
        setQuantity(quantity);
    };
    
    return (
        <div className="item-detail">
            <div className="left">
                <span className="titulo-detail">{titulo}</span>
                <span className="subtitulo-detail">{subtitulo}</span>
                <span className="descripcion-detail">{descripcion}</span>
                <span className="precio-detail">{precio}</span>

                {/* <ItemCount stock={stock} initial={1} /> */}
                {quantity > 0 ? <Link className="buttonItem" to='/cart'>Confirmar</Link> : <ItemCount stock={stock} onAdd={handleOnAdd}/>}

            </div>

            <div className="right">
                <img src={img}/>
            </div>
        </div>
    )
}

export default ItemDetail