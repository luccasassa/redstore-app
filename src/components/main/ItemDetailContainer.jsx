import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsId } from "../../asyncmock"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({}) => {
  const [product, setProduct]= useState();

  const { productId } = useParams()
    
  useEffect(()=>{
    getProductsId(productId).then(response =>{
        setProduct(response)
    })
  }, [productId])

    return (
        <div>
          <ItemDetail {...product}/> 
        </div>
    )
}

export default ItemDetailContainer