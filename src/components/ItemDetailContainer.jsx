import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {

        getDoc(doc(db, 'products', productId)).then(response => {
            console.log(response)
            
            const product = { id: response.id, ...response.data()}
            setProduct(product)
            
        }).catch(e => {
            console.log(e)
        })
    }, [productId])

    return(
        <div className='item-detail-container'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer