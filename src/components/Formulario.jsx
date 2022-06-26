import { db } from "../services/firebase";
import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from '../context/CartContext';
import Loader from "./Loader";

const Formulario = () => {

    const { cart, vaciar, getQuantity, totalPrice } = useContext(CartContext)
    
    const [loading, setLoading] = useState(false)
    
    const [orderId, setOrderId] = useState("")

    const [creatingOrder, setCreatingOrder] = useState(false)
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const sendOrder = (e) => {
        e.preventDefault()
        setCreatingOrder(true)
        delete formData.emailConfirm

        const newOrder = {
            buyer: formData,
            date: Timestamp.fromDate(new Date()),
            items: cart,
            total: totalPrice()
        };
        
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, newOrder)
        .then(({ id }) => {
            setOrderId(id)
            batch.commit()

        }).catch(e => {
            console.log(e)
            alert(`**ERROR** ALGUNOS PRODUCTOS NO TIENEN STOCK`)

        }).finally(() => {
            setCreatingOrder(false)
            setFormData({ name: "", email: "", phone: "" });
            setLoading(false)
            vaciar()
        });
        
        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const batch = writeBatch(db)
        
        const collectionRef = collection(db, 'products') 

        getDocs(query(collectionRef, where(documentId(),"in", ids)))
        .then(response =>{
            response.docs.forEach(doc =>{
                const dataDoc = doc.data()

                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        })
        
        if(loading) {
            return <Loader/>
        }
    };
    
    return (
        <div>
            <div className="formulario-container">
                {creatingOrder 
                ?
                <Loader />
                :
                orderId
                    ?
                    <div className="compra-realizada">
                        {orderId && <h1>COMPRA REALIZADA!</h1>}

                        <span className="numero-orden">El número de su orden es: <b>{orderId}</b></span>

                        <Link to={`/`} className='volver-inicio'><button>VOLVER AL INICIO</button></Link>
                    </div>
                    :
                    <div>
                        <h1>Confirmación de compra</h1>
                        <form onSubmit={sendOrder} onChange={handleChange}>

                            <div className="dato-form">
                                {/* <label>Nombre y apellido:</label> */}
                                <input autocomplete="off" name="name" defaultValue={formData.name} required placeholder="Nombre y Apellido"/>
                            </div>

                            <div className="dato-form">
                                {/* <label>Teléfono:</label> */}
                                <input autocomplete="off" name="phone" defaultValue={formData.phone} required placeholder="Teléfono"/>
                            </div>

                            <div className="dato-form">
                                {/* <label>E-mail:</label> */}
                                <input autocomplete="off" name="email" defaultValue={formData.email} required placeholder="E-mail"/>
                            </div>

                            <button className="confirmar-pedido" disabled={ !formData.name || !formData.phone || !formData.email || cart.length === 0}>Confirmar pedido</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default Formulario