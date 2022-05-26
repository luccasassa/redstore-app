import { useState } from 'react'

const ItemCount = (props) => {

    // const state = useState(10)
    // const count = state[0]
    // const setCount = state[1]
    const [count, setCount] = useState(parseInt(props.initial));

    const onAdd = () => {
        // condicional para evitar estar por encima del máximo (stock disponible)
        if(count < props.stock){
            setCount(count + 1);
        }
    }

    const onSubtraction = () => {
        // condicional para evitar estar por debajo del valor inicial otorgado
        if(count > props.initial){
            setCount(count - 1);
        }
    }

    return(
        <div className="cantidades">
            <button className='restar' onClick={onSubtraction}>-</button>
            <span className='count'>{count}</span>
            <button className='sumar' onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount