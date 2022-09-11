import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProduct, setCartProduct] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const addProductToCart = (item, quantity) => {
        setTotalProducts(totalProducts + quantity)

        //condicional para saber si el producto ya existe para que no se duplique
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
        setCartProduct([]);
        setTotalProducts(0);
    }

    const deleteCartById = (id, quantity) => {
        const newCart = [...cartProduct];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCartProduct([...newCart]);
        setTotalProducts(totalProducts-quantity);
    }

    const data = {
        cartProduct,
        totalProducts,
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