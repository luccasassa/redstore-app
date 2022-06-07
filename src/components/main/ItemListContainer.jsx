import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from "../../asyncmock";
import { getProductsCategory } from '../../asyncmock';
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
            getProductsCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])
    
    return (
        <main>
            <h1>{categoryId ? categoryId : titulo}</h1>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer