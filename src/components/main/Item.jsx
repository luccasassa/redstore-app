import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <div>
            <Link to={`/Producto/${item.id}`}>
                <div className='producto'>
                        <img src={item.img}/>

                        <div className='producto-detalle'>
                            <span className='card'>{item.card}</span>
                            <span className='precio'>{item.precio}</span>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Item