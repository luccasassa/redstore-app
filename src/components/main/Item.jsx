import ItemCount from './ItemCount'

const Item = ({id, titulo, subtitulo, descripcion, categoria, stock, precio, img}) => {
    return (
        <div className='producto'>
            <div className='producto-detalle'>
                <img src={img}/>
                <span className='titulo'>{titulo}</span>
                <span className='subtitulo'>{subtitulo}</span>
                <span className='precio'>${precio}</span>
            </div>
            
            <div className='producto-eleccion'>
                <ItemCount stock={stock} initial={1} />
                <button className="agregar">AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default Item