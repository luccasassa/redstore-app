import ItemCount from "./ItemCount"

const CartWidget = () => {
    return(
        // icono sin numero (falta añadir modal)
        <button id="open-carrito" className="material-icons-outlined carrito">shopping_cart
            <div className="contenido-mini">
                <div className="mini">
                    <ItemCount/>
                </div>
            </div>
        </button>
    )
}

export default CartWidget
