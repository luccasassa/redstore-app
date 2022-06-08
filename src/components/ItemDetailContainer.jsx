import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../asyncmock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer