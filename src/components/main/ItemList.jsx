import { useState, useEffect } from "react";
import db from "../../helpers/db";
import Item from "./Item"

const ItemList = ({category}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            resolve(db)
        })

        promesa.then((response) => {
            setTimeout(() => {
                setProducts(response)
            }, 1000)
        })
        .catch((e) => {
            console.log(e)
        })
    }, [])

    return(
        <div className="productos">
            {category 
                ? products
                    .filter((item) => item.categoria === category)
                    .map((item) => <Item item={item} key={item.id}/>)
                : products.map((item) => <Item item={item} key={item.id}/>)}
        </div>
    )
}

export default ItemList