import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
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
                        <span className='count'>{count}</span>
                        <button className='sumar' onClick={increment}>+</button>
                    </div>

                    <button className="agregar" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
                </div>
            }
                
        </>
    )
}

export default ItemCount