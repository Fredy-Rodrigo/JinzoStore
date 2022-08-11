import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProduct, setCartProduct] = useState([]);

    /* const addProductToCart = (product) => {
        //setCartProduct(cartProduct => [...cartProduct, product]);
        setCartProduct([...cartProduct, product]);
    } */

    const addProductToCart = (item, quantity) => {
        if(cartProduct.some(el => el.id === item.id)){
            
            let index = cartProduct.findIndex(el => el.id === item.id);
            let product = cartProduct[index];
            product.quantity = product.quantity + quantity;

            const newCart = [...cartProduct];
            newCart.splice( index, 1, product );

            setCartProduct([ ...newCart ]);

        }else{
            let product = {...item, quantity};
            setCartProduct([...cartProduct, product ]);
        }
    }

    const clearProducts = () => {
        setCartProduct([])
    }

    const deleteCartById = ( id ) => {
        const newCart = [...cartProduct];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCartProduct([...newCart]);
    }

    const data = {
        cartProduct,
        setCartProduct,
        clearProducts,
        addProductToCart,
        deleteCartById
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext}