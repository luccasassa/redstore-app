import ItemCount from './ItemCount'

const Item = ({id, titulo, subtitulo, descripcion, categoria, stock, precio, img}) => {
    return (
        <div className='producto'>
            <span>{titulo}</span>
            <span>{subtitulo}</span>
            <span>${precio}</span>
            <img src={img}/>
            <ItemCount stock={stock} initial={1} />
            <button class="agregar">AGREGAR AL CARRITO</button>
            <hr />
        </div>
    )
}

export default Item