import ItemList from "./ItemList";

const ItemListContainer = ({productos}) => {
    return (
        <main>
            <h1>{productos}</h1>
            <ItemList/>
        </main>
    )
}

export default ItemListContainer