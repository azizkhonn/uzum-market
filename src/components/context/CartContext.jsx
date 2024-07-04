import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const addToLiked = (product) => {
        setLikedProducts([...likedProducts, product]);
    };

    const removeFromLiked = (productId) => {
        setLikedProducts(likedProducts.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, likedProducts, addToCart, removeFromCart, addToLiked, removeFromLiked }}>
            {children}
        </CartContext.Provider>
    );
};
