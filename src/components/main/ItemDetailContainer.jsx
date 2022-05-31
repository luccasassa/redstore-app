import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../../helpers/db"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({}) => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const promesaDetail = new Promise((resolve, reject) => {
            resolve(db.find((i) => i.id == id))
        })

        promesaDetail
          .then((response) => {
            setProduct(response)
          })
          .catch((e) => {
            console.log(e)
          })
      }, [])

    return (
        <div>
            <ItemDetail item={product}/>
        </div>
    )
}

export default ItemDetailContainer