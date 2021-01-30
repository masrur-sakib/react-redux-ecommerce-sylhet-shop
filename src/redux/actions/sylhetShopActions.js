export const ADD_TO_CART = 'ADD_TO_CART';
export const PRODUCT_QUANTITY_CHANGE = 'PRODUCT_QUANTITY_CHANGE';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        product
    }
};
export const productQuantityChange = () => {
    return {
        type: PRODUCT_QUANTITY_CHANGE
    }
};
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};