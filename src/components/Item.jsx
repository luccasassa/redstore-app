import { Link } from 'react-router-dom'

const Item = ({id, img, card, price}) => {
    return (
        <div>
            <Link to={`/Producto/${id}`}>
                <div className='producto'>
                        <img src={img}/>

                        <div className='producto-detalle'>
                            <span className='card'>{card}</span>
                            <span className='precio'>{price}</span>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default Item