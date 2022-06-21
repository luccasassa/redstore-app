import { Link } from 'react-router-dom'

const Item = ({id,title, img, card, category, price, stock}) => {
    return (
        <>
            {stock < 1
            ?   
                <Link to={`/${category}/${id}/${title}`}>
                    <div className='producto'>
                            <div className='sin-stock-item'>SIN STOCK</div>
                            <img src={img}/>

                            <div className='producto-detalle'>
                                <span className='card'>{card}</span>
                                <span className='precio'>{price}</span>
                            </div>
                    </div>
                </Link>

            :   
                <Link to={`/${category}/${id}/${title}`}>
                    <div className='producto'>
                            <img src={img}/>

                            <div className='producto-detalle'>
                                <span className='card'>{card}</span>
                                <span className='precio'>{price}</span>
                            </div>
                    </div>
                </Link>
            }
                
        </>
    )
}

export default Item