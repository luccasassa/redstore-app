import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > initial){
            setQuantity(quantity - 1);
        }
    }

    return(
        <>
            {stock < 1
            ?   
                <button className='sin-stock-count' disabled>SIN STOCK</button>

            :   
                <div className='producto-eleccion'>
                    <div className="cantidades">
                        <button className='restar' onClick={decrement}>-</button>
                        <span className='count'>{quantity}</span>
                        <button className='sumar' onClick={increment}>+</button>
                    </div>

                    <button className="agregar" onClick={() => onAdd(quantity)}>AGREGAR AL CARRITO</button>
                </div>
            }
        </>
    )
}

export default ItemCount