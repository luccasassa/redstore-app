import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {

        if (!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if (prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct

                } else {
                   return prod
                }
            })  
            setCart(newCart)
        }
    }
    
    const getQuantity = () => {
        let cc = 0
        cart.forEach(prod => {
          cc += prod.quantity
        })
    
        return cc
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, getQuantity, getProduct, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext