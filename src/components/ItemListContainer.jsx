import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProducts } from "../asyncmock";
import { getProductsByCategory } from '../asyncmock';
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({titulo}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts()
            .then(response => {
                setProducts(response)
            }).catch(e => {
                console.log(e)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId)
            .then(response => {
                setProducts(response)
            }).catch(e => {
                console.log(e)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading) {
        return <Loader/>
    }

    return (
        <main>
            <h1>{categoryId ? categoryId : titulo}</h1>

            { products.length > 0
                ? <ItemList products={products} />
                : <h2>No hay productos</h2>
            }
        </main>
    )
}

export default ItemListContainer