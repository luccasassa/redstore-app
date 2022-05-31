import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({titulo}) => {
    const {id} = useParams()
    
    return (
        <main>
            <h1>{id ? id : titulo}</h1>
            <ItemList category={id}/>
        </main>
    )
}

export default ItemListContainer