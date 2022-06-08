const CartWidget = () => {
    return(
        <button id="open-carrito" className="material-icons-outlined carrito">shopping_cart
            <div className="contenido-mini">
                <div className="mini">
                    <span className="cantidad-total">0</span>
                </div>
            </div>
        </button>
    )
}

export default CartWidget
