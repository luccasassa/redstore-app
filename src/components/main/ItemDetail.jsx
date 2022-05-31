import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
            <div className="left">
                <span className="titulo-detail">{item.titulo}</span>
                <span className="subtitulo-detail">{item.subtitulo}</span>
                <span className="descripcion-detail">{item.descripcion}</span>
                <span className="precio-detail">{item.precio}</span>

                <div className='producto-eleccion'>
                    <ItemCount stock={item.stock} initial={1} />
                    <button className="agregar">AGREGAR AL CARRITO</button>
                </div>
            </div>

            <div className="right">
                <img src={item.img}/>
            </div>
        </div>
    )
}

export default ItemDetail