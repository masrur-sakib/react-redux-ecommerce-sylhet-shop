export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
};
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};