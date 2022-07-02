import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({titulo}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId)) 
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <Loader/>
    }

    return (
        <main>
            <h1>{ categoryId ? categoryId : titulo }</h1>

            { products.length > 0
                ? <ItemList products={products} />
                : <div className="categoria-no-encontrada">
                    CATEGORIA NO ENCONTRADA
                </div>
            }
        </main>
    )
}

export default ItemListContainer