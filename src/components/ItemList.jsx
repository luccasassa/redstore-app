import Item from "./Item"

const ItemList = ({products, handlePage}) => {

    return(
        
        <div className="productos">
            {products.map(prod => <Item key={prod.id} {...prod} handlePage={handlePage}/>)}
        </div>
    )
}

export default ItemList