import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db, collectionsName } from '../services/firebase';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, removeItem, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    const quantity = getQuantity()

    /* const createOrder = () => {
        const objOrder = {
            // buyer: {
                // name: '',
                // email: '',
                // phone: ''
            // },
            items: cart
            // total: totalPrice()
        }

        const ids = cart.map(prod => prod.id)

        const collectionRef = collection(db, 'products')
        
        const batch = writeBatch(db)
        
        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ type: 'out_of_stock', products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit()
            // vaciar()
            alert(`El id de la orden es: ${id}`)
        }).catch(e => {
            console.log('ERROR '+ e)
        })
    } */

    return (
        <div>
            <h1>Carrito de compras</h1>

            {quantity > 0
            ?
                <div className="carrito-container">
                    <div className="productos-carrito">
                        {cart.map(prod => {
                            return(
                                <div key={prod.id} className='producto-carrito'>
                                    
                                    <div className="carrito-izq">
                                        <img src={prod.img}/>

                                        <div className="izq-datos">
                                            <span className="carrito-titulo">{prod.card}</span>
                                            <span className="carrito-precio">${prod.price * prod.quantity}</span>
                                        </div>
                                    </div>

                                    <div className="carrito-mid">
                                        <span className="carrito-cantidad">x{prod.quantity}</span>
                                    </div>

                                    <button onClick={() => removeItem(prod.id)}>ELIMINAR</button>
                                </div>
                            )})
                        }
                    </div>

                    <div className="cantidades-totales-carrito">
                        <div className="cantidades-texto">
                            <span>Productos:</span>
                            <span>Precio total:</span>
                        </div>

                        <div className="cantidades-numeros">
                            <span className="cantidad-total">{quantity}</span>
                            <span className="precio-total">{totalPrice()}</span>
                        </div>
                    </div>

                    <div className="acciones-carrito">
                        <button className="vaciar-carrito" onClick={vaciar}>VACIAR CARRITO</button>
                        <Link to={'/Formulario'}><button /* onClick={createOrder} */ className="confirmar-compra">CONFIRMAR COMPRA</button></Link>
                    </div>
                </div>
            :
                <span className="carrito-vacio">SU CARRITO ESTÁ VACÍO</span>
            }
        </div>

    )
}

export default Cart