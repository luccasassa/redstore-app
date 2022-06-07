import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    // const state = useState(10)
    // const count = state[0]
    // const setCount = state[1]
    const [count, setCount] = useState(initial);

    const onIncrement = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const onDecrease = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }

    return(
        <div className='producto-eleccion'>
            <div className="cantidades">
                <button className='restar' onClick={onDecrease}>-</button>
                <span className='count'>{count}</span>
                <button className='sumar' onClick={onIncrement}>+</button>
            </div>

            <button className="agregar" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount